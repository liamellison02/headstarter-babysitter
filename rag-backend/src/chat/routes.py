from src.chat import bp
from flask import Response


def event_stream():
    return None


@bp.route('/chat/')
def stream():
    """Create new chat stream."""
    return Response(event_stream(), mimetype='text/event-stream')
