from flask import Flask, jsonify
from config import Config
from sentence_transformers import SentenceTransformer

# embed_model = SentenceTransformer("sentence-transformers/text-embedding-ada-002", trust_remote_code=True)
# embed_model_dims = embed_model.get_sentence_embedding_dimension()

# def text_to_embedding(text):
#     """Generates vector embeddings for the given text."""
#     embedding = embed_model.encode(text)
#     return embedding.tolist()

def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)

    # Initialize Flask extensions here

    # Register blueprints here
    from src.store import bp as store_bp
    app.register_blueprint(store_bp)
    from src.chat import bp as chat_bp
    app.register_blueprint(chat_bp)

    @app.route('/ping/')
    def ping_api():
        return jsonify('Flask server is running')

    return app
