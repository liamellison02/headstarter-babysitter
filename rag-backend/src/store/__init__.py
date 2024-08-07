from flask import Blueprint

bp = Blueprint('store', __name__)

from src.store import routes
