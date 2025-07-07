const sessions = {}; 

function generateSessionId() {
  return crypto.randomUUID();
}

export function getSessionId(pathname) {
  if (!sessions[pathname]) {
    sessions[pathname] = generateSessionId();
  }
  return sessions[pathname];
}

export function resetSessionId(pathname) {
  delete sessions[pathname];
}

export function clearAllSessions() {
  Object.keys(sessions).forEach(path => delete sessions[path]);
}
