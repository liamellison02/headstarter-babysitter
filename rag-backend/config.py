import os
from flask import Flask, jsonify
from flask_cors import CORS
from dotenv import load_dotenv

app = Flask(__name__)
CORS(app)
load_dotenv()


class Config:
    OPENAI_API_KEY = os.environ.get('SECRET_KEY')
    tidb_connection_string = os.environ.get('TIDB_DATABASE_URI')


@app.route('/', methods=['GET'])
def index():
    return jsonify({"message": 'Flask server is running'})


if __name__ == '__main__':
    """Set debug to False for production"""
    app.run(debug=True, use_reloader=True, host='0.0.0.0', port=5000) 
