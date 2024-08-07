from flask import Flask, jsonify
from config import Config


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
