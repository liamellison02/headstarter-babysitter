from flask import Blueprint

bp = Blueprint('chat', __name__)

from src.chat import routes