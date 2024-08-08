from flask import request, jsonify
from langchain_community.vectorstores import TiDBVectorStore
from langchain_community.embeddings import OpenAIEmbeddings
from langchain.text_splitter import RecursiveCharacterTextSplitter

from src.store import bp


@bp.route('/new-file/')
def new_file():
    """Upload a new file to TiDB along with its vector embeddings."""
    return 'New file created!'


@bp.route('/embed', methods=['POST'])
def embed():
    try:
        if 'file' not in request.files:
            return jsonify({"error": "No file provided"}), 400
        
        file = request.files['file']
        file_content = file.read().decode("utf-8")        
      
        text_splitter = RecursiveCharacterTextSplitter(
            chunk_size=1000,
            chunk_overlap=100,
            separators=[
            "\n\n",
            "\n",
            ]
        )
        texts=text_splitter.create_documents([file_content])

        DB_PATH = "vectorstores/db/"
        vectorstore = TiDBVectorStore.from_documents(
            documents=texts, 
            embedding=OpenAIEmbeddings(), 
            persist_directory=DB_PATH
        )      
        
        return jsonify({"message": "File uploaded successfully"})

    except Exception as e:
        return jsonify({"error": str(e)}), 500
