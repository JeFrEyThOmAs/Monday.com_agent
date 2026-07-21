# 🤖 Monday Intelligence AI

> An AI-powered enterprise assistant that understands natural language and interacts with multiple Monday.com boards using LangChain, Gemini, and the Monday GraphQL API.

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-green?logo=node.js)
![LangChain](https://img.shields.io/badge/LangChain-Agent-purple)
![Gemini](https://img.shields.io/badge/Gemini-2.5%20Flash-orange)
![Monday.com](https://img.shields.io/badge/Monday.com-GraphQL-red)
![License](https://img.shields.io/badge/License-MIT-blue)

---

## 📖 Overview

Monday Intelligence AI is an AI-powered assistant that allows users to interact with their Monday.com workspace using natural language instead of manually searching through boards.

Rather than navigating multiple dashboards, filtering data manually, or writing GraphQL queries, users can simply ask questions like:

- "Show open deals"
- "Find high priority tasks"
- "Show deals owned by OWNER_004"
- "List Mining sector deals"

The assistant automatically determines which tool to use, fetches live data from Monday.com, and returns an easy-to-read response.

---
## 📸 Preview

<p align="center">
  <img src="./screenshots/a.png" width="900">
</p>

<br>

<p align="center">
  <img src="./screenshots/b.png" width="900">
</p>
# ✨ Features

## 📋 Task Management

- Retrieve all tasks
- Search tasks by ID
- Filter tasks by priority
- Filter tasks by status
- Filter tasks by owner

---

## 📈 Deal Funnel Intelligence

- Retrieve all deals
- Search deals by name
- Filter by status
- Filter by owner
- Filter by sector
- Filter by deal stage
- Filter by closure probability

---

## 🤖 AI Agent

The project uses **LangChain's tool-calling agent**.

Instead of hardcoding logic, the LLM decides which tool should be executed based on the user's request.

Example:

```
User:
Show open Mining deals

↓

Gemini understands the intent

↓

Selects the appropriate tool

↓

Queries Monday GraphQL API

↓

Returns formatted results
```

This makes the assistant easily extensible for additional boards and tools.

---

# 🏗️ Architecture

```
                    +----------------------+
                    |      React UI        |
                    +----------+-----------+
                               |
                               |
                               ▼
                    +----------------------+
                    |   Express Backend    |
                    +----------+-----------+
                               |
                               ▼
                 +---------------------------+
                 | LangChain AI Agent        |
                 | Gemini 2.5 Flash          |
                 +------------+--------------+
                              |
              +---------------+----------------+
              |                                |
              ▼                                ▼
      Task Tools                      Deal Funnel Tools
              |                                |
              +---------------+----------------+
                              |
                              ▼
                 Monday.com GraphQL API
                              |
                              ▼
                     Monday.com Boards
```

---

# 🛠️ Tech Stack

## Frontend

- React
- Vite
- Axios
- CSS3

---

## Backend

- Node.js
- Express.js

---

## AI

- LangChain
- Google Gemini 2.5 Flash

---

## APIs

- Monday.com GraphQL API

---

## Validation

- Zod

---

## Environment

- dotenv

---

# 📂 Project Structure

```
Monday-AI-Agent
│
├── backend
│   ├── agent
│   ├── services
│   ├── tools
│   ├── routes
│   ├── server.js
│   └── .env
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── api
│   │   ├── App.jsx
│   │   └── index.css
│   └── vite.config.js
│
└── README.md
```

---

# 🚀 Getting Started

## 1. Clone the repository

```bash
git clone https://github.com/yourusername/monday-intelligence-ai.git

cd monday-intelligence-ai
```

---

## 2. Install Backend Dependencies

```bash
cd backend

npm install
```

---

## 3. Install Frontend Dependencies

```bash
cd ../frontend

npm install
```

---

# 🔑 Environment Variables

Create a `.env` file inside the backend folder.

```
MONDAY_API_TOKEN=YOUR_MONDAY_API_TOKEN

MONDAY_BOARD_ID=YOUR_TASK_BOARD_ID

DEAL_FUNNEL_BOARD_ID=YOUR_DEAL_BOARD_ID

GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

---

# ▶️ Running the Project

Backend

```bash
cd backend

npm run dev
```

Frontend

```bash
cd frontend

npm run dev
```

Open:

```
http://localhost:5173
```

Backend runs on:

```
http://localhost:3000
```

---

# 💬 Example Queries

### Tasks

```
Show all tasks

Show completed tasks

Show high priority tasks

Show tasks assigned to OWNER_001
```

---

### Deals

```
Show open deals

Show Mining deals

Show DSP deals

Show deals owned by OWNER_004

Find Naruto

Show high probability deals
```

---

# 🧠 How It Works

The assistant follows a tool-based workflow.

```
User Prompt

↓

LangChain Agent

↓

Gemini understands intent

↓

Appropriate Tool Selected

↓

Monday GraphQL Query

↓

Data Retrieved

↓

AI Formats Response

↓

Displayed in React UI
```

This approach separates reasoning from data retrieval, making the system modular and easy to extend.

---

# 📸 Screenshots

## Home

> Add screenshot here

```
/screenshots/home.png
```

---

## Deal Queries

> Add screenshot here

```
/screenshots/deals.png
```

---

## Task Queries

> Add screenshot here

```
/screenshots/tasks.png
```

---

# 📈 Future Improvements

- Work Order board integration
- Analytics dashboard
- Interactive charts
- Markdown rendering
- Streaming AI responses
- Authentication
- Conversation history
- Multi-board reasoning
- AI-generated summaries
- Export reports
- Role-based access

---

# 💡 Why This Project?

Traditional project management tools require users to manually search, filter, and navigate between multiple boards.

Monday Intelligence AI introduces a conversational interface where users interact with enterprise data using natural language, reducing friction and improving accessibility.

The architecture is designed to be modular, allowing new boards, tools, and workflows to be added with minimal changes.

---

# 📄 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

**Jeffrey Thomas**

GitHub: https://github.com/JeFrEyThOmAs

LinkedIn: https://www.linkedin.com/in/jeffrey-thomas-49000826b/
