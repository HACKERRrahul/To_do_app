# TODO FastAPI Application

This project is a **TODO management application** built with **FastAPI** for the backend and **Next.js** with **shadcn** for the frontend. It provides authentication via **JWT tokens** and allows users to create, read, update, and delete their to-do tasks.

## Features

- **User Authentication** with JWT tokens.
- **Password Hashing** with bcrypt using **Passlib**.
- **User Registration** and profile management.
- **To-Do Management** (Create, Read, Update, Delete).
- **PostgreSQL Database** interactions using **SQLModel**.
- **Frontend** built using **Next.js** and **shadcn**.
- **Unit Tests** for key endpoints using `pytest`.

## Directory Structure


## Requirements

- Python 3.8+
- FastAPI (Backend)
- Next.js, React (Frontend)
- SQLModel
- Passlib
- PyJWT
- PostgreSQL
- Poetry (for dependency management and environment handling)
- pytest (for testing)

## Installation

### Backend Setup

1. Clone the repository:
    ```bash
    git clone <repository_url>
    cd project-directory
    ```

2. Install dependencies using Poetry:
    ```bash
    poetry install
    ```

3. Set up your environment variables:
    - Create a `.env` file at the root of the project with the following content:
    ```bash
    DEBUG=True
    DATABASE_URL=postgresql://<username>:<password>@<hostname>/<database_name>?sslmode=require
    TEST_DATABASE_URL=postgresql://<username>:<password>@<hostname>/<test_database_name>?sslmode=require
    ```

4. Create the database tables:
    ```bash
    poetry run python -c "from backend.db import create_tables; create_tables()"
    ```

5. Start the FastAPI backend server:
    ```bash
    poetry run uvicorn backend.main:app --reload
    ```

### Frontend Setup

1. Navigate to the frontend directory:
    ```bash
    cd frontend
    ```

2. Install dependencies using npm:
    ```bash
    npm install
    ```

3. Run the development server:
    ```bash
    npm run dev
    ```

4. The frontend will be available at `http://localhost:3000`.

## Running Tests

To run tests using `pytest`, execute the following command:
```bash

pip3 install pytest
poetry run pytest

License MIT
