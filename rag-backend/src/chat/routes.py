import os
import sys
from collections import deque

from flask import Response, request, stream_with_context
from langchain_community.vectorstores import TiDBVectorStore
from langchain_community.embeddings import OpenAIEmbeddings
from langchain_core.prompts import ChatPromptTemplate
from langchain.chains import ConversationalRetrievalChain
from langchain_community.chat_models import ChatOpenAI
from langchain.callbacks.streaming_stdout import StreamingStdOutCallbackHandler

from src.chat import bp

q = deque()
stop_item = "###finish###"


class StreamingStdOutCallbackHandlerYield(StreamingStdOutCallbackHandler):
    def on_llm_start(
        self, serialized, prompts, **kwargs
    ) -> None:
        """Run when LLM starts running."""
        with q.mutex:
            q.clear()

    def on_llm_new_token(self, token, **kwargs) -> None:
        """Run on new LLM token. Only available when streaming is enabled."""
        sys.stdout.write(token)
        sys.stdout.flush()
        q.append(token)

    def on_llm_end(self, response, **kwargs) -> None:
        """Run when LLM ends running."""
        q.append(stop_item)


@bp.route('/chat/', methods=['POST'])
def stream():
    """Create new chat stream."""

    data = request.get_json()
    prompt = data['prompt']

    # First connect to TiDB vector store
    vector_store = TiDBVectorStore(
        connection_string=os.getenv('TIDB_DATABASE_URI'),
        embedding_function=OpenAIEmbeddings(),
        table_name="embedded_documents",
        distance_strategy="cosine",
    )

    # Create new stream
    llm = ChatOpenAI(
      temperature=0,
      openai_api_key=os.getenv('OPENAI_API_KEY'),
      model='gpt-4o',
      streaming=True,
      callbacks=[StreamingStdOutCallbackHandlerYield()]
    )

    # Create new chat chain
    chain = ConversationalRetrievalChain.from_llm(
        llm,
        retriever=vector_store.as_retriever(),
        condense_question_llm=llm,
        return_source_documents=True,
        chain_type="stuff",
        get_chat_history=lambda h : h
    )

    PROMPT_TEMPLATE = """You are a good assistant that answers questions. Your knowledge is strictly limited to the following piece of context. Use it to answer the question at the end.
    If the answer can't be found in the context, just say you don't know. *DO NOT* try to make up an answer.
    If the question is not related to the context, politely respond that you are tuned to only answer questions that are related to the context.
    Give a response in the same language as the question.
    
    Context: {context}
    """
    system_prompt = ChatPromptTemplate.from_template(PROMPT_TEMPLATE)

    chain.combine_docs_chain.llm_chain.prompt.messages[0] = system_prompt

    ai_response = chain({"question": prompt, 'chat_history': ''})

    return Response(stream_with_context(ai_response['answer']))
