# Full Stack App: ReactJS + Flask + Remote SQL Server

## Overview

This project is a full stack web application composed of three main components:

- **Frontend:** Built with [ReactJS](https://react.dev/) using [Vite](https://vitejs.dev/) for fast development and optimized builds.
- **Backend:** Powered by [Python Flask](https://flask.palletsprojects.com/), which serves APIs and handles business logic.
- **Database:** A remote SQL Server instance (can be MSSQL, MySQL, PostgreSQL, etc.) for persistent data storage.
- **Queries Folder:** Contains SQL queries to interact with the database, designed for both data fetching and uploading.

---

## Project Structure

```
root/
│
├── frontend/      # ReactJS app (Vite, port 5175)
│   └── ...        
│
├── backend/       # Flask app (port 5000)
│   └── ...
│
├── queries/       # SQL scripts for fetch/upload operations
│   └── ...
│
└── README.md      # This file
```

---

## Getting Started

### 1. Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [Python](https://www.python.org/) (v3.8+ recommended)
- Access to a remote SQL Server (update credentials as needed)
- [pip](https://pip.pypa.io/en/stable/) for Python dependencies
- [Postman](https://www.postman.com/) (for API testing)

---

### 2. Installation

#### Backend (Flask)

1. Navigate to the `backend` folder:

   ```bash
   cd backend
   ```

2. Create a virtual environment (recommended):

   ```bash
   python -m venv venv
   # On Windows:
   venv\Scripts\activate
   # On macOS/Linux:
   source venv/bin/activate
   ```

3. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```

4. Set environment variables for database connection (example for PostgreSQL):

   ```bash
   export DB_HOST=your_db_host
   export DB_PORT=your_db_port
   export DB_USER=your_db_user
   export DB_PASSWORD=your_db_password
   export DB_NAME=your_db_name
   ```

5. **Run the Flask app (from within the `backend` folder, after activating your environment):**

   ```bash
   python server.py
   ```

#### Frontend (ReactJS + Vite)

1. Navigate to the `frontend` folder:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

   The app will be available at [http://localhost:5173](http://localhost:5173).

---

## Running Both Frontend & Backend from Project Root

You can now run both the frontend and backend servers from the project root using a single command, thanks to the [concurrently](https://www.npmjs.com/package/concurrently) package.

### 1. Ensure dependencies are installed at the root (run in project root):

```bash
npm install
```

- This will install `concurrently` as a dev dependency (already included in your `devDependencies`) and any other root dependencies.

### 2. Project-level scripts

Your root `package.json` should include the following scripts:

```json
"scripts": {
  "dev": "concurrently \"npm run frontend\" \"npm run backend\"",
  "frontend": "cd frontend && npm run dev",
  "backend": "cd backend && venv\\Scripts\\activate && python server.py"
}
```

> On **Windows**, the `"backend"` script as above will work.  
> On **macOS/Linux**, change the backend script to use `source venv/bin/activate`:
> ```json
> "backend": "cd backend && source venv/bin/activate && python server.py"
> ```

### 3. To start both servers from the root directory in one terminal:

```bash
npm run start-all
```

- This command will:
  - Start the React frontend on port 5175
  - Activate the backend Python virtual environment and start Flask on port 5000

---

## 3. Testing the APIs

- **All API endpoints are tested with [Postman](https://www.postman.com/).**
- Import your API collection or use the built-in Postman tools to send requests while developing.

---

## 4. SQL Queries

- Place your SQL scripts for data fetching and uploading inside the `queries/` folder.
- Each script should be well documented, describing its purpose and parameters.
- The backend should load and execute these queries as needed.

---

## 5. Connecting Frontend & Backend

- By default, the frontend expects the backend API to be running at `http://localhost:5000`.
- Update API endpoints in the frontend code (`frontend/src` or via `.env` files) as needed.
- For production, consider using a reverse proxy (e.g., Nginx) to serve both frontend and backend from a single domain.

---

## 6. Environment Variables

Ensure you set the following environment variables for the backend:

- `DB_HOST` - SQL server hostname
- `DB_PORT` - SQL server port
- `DB_USER` - SQL server username
- `DB_PASSWORD` - SQL server password
- `DB_NAME` - SQL database name

You may also have a `.env` file for frontend configuration.

---

## 7. Example API Call (Frontend)

```js
// Example: Fetch users from Flask backend
fetch('http://localhost:5000/api/users')
  .then(res => res.json())
  .then(data => console.log(data));
```

---

## 8. Deployment

- **Frontend:** Build with `npm run build` and serve `dist/` with your preferred static file server.
- **Backend:** Deploy Flask app with Gunicorn, uWSGI, or similar.
- **Database:** Ensure your remote SQL server is accessible from your backend.

---

## 9. Security

- **Never commit sensitive credentials** (use `.env` files and gitignore them).
- Use environment variables for all secrets.
- Consider setting up CORS appropriately in Flask for cross-origin requests.

---

## 10. Folder Purpose

| Folder      | Purpose                                            |
| ----------- | -------------------------------------------------- |
| `frontend/` | ReactJS client application                         |
| `backend/`  | Flask backend server (API, business logic)         |
| `queries/`  | SQL scripts for data operations                    |

---

## 11. Useful Scripts

#### Frontend

```bash
npm run dev         # Start dev server
npm run build       # Build for production
npm run preview     # Preview production build
```

#### Backend

```bash
python server.py    # Run Flask app (after activating your environment)
```

#### Root

```bash
npm run start-all         # Run both frontend and backend concurrently from root
```

---