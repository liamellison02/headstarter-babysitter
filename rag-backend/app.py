from flask import Flask, jsonify
from flask_cors import CORS
from dotenv import load_dotenv

app = Flask(__name__)
CORS(app)
load_dotenv()


@app.route('/', methods=['GET'])
def index():
    return jsonify({"message": 'Flask server is running'})
