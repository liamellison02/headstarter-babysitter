from src.store import bp


@bp.route('/new-file/')
def new_file():
    """Upload a new file to TiDB along with its vector embeddings."""
    return 'New file created!'
