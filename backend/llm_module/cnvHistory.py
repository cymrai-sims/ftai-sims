history = {}  # { page: { session_id: [messages] } }

def add_message(page, session_id, role, content):
    if page not in history:
        history[page] = {}
    
    if session_id not in history[page]:
        # Reset history for the page (new session)
        history[page] = {}

    if session_id not in history[page]:
        history[page][session_id] = []

    history[page][session_id].append({"role": role, "content": content})

def get_history(page, session_id):
    return history.get(page, {}).get(session_id, [])
