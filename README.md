# 🧩 Task Management Dashboard

A responsive Kanban-style Task Management Dashboard built with **React + Vite + Tailwind CSS** and **DndKit** for drag-and-drop functionality.

> 🔧 Includes Add, Edit (via Drag), and Delete functionality with full API integration using `json-server`.

---

## 🚀 Features

- 🧱 3-column Kanban board (To Do, In Progress, Done)
- ➕ Add new tasks via modal
- 🔀 Drag-and-drop tasks between columns
- 🌐 Mock API via `json-server`
- 📱 Fully responsive design

---

## 📁 Project Structure

```
├── public/
├── src/
│   ├── api/               # Axios API calls
│   ├── components/        # TaskCard, Column, Modal, etc.
│   ├── pages/             # Dashboard page
│   ├── App.jsx
│   └── main.jsx
├── db.json                # Mock database for json-server
├── package.json
└── tailwind.config.js
```

---

## 🛠 Tech Stack

- **Frontend**: React + Vite
- **Styling**: Tailwind CSS
- **Drag & Drop**: DndKit
- **Mock API**: json-server
- **State**: useState + useEffect (can be migrated to Redux/Context)

---

## ⚙️ Getting Started

### 1️⃣ Clone the Repo

```bash
git clone https://github.com/KiranBabuMakireddi/DigitalXcassignment.git
cd yourfolder-name
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Run the Mock API Server

```bash
npx json-server --watch db.json --port 3000
```

This runs the API at: `http://localhost:3000/tasks`

---

### 4️⃣ Run the Frontend (Vite)

```bash
npm run dev
```

App should be available at: `http://localhost:5173`

---

## ✨ Available API Endpoints

| Method | Endpoint              | Description             |
|--------|-----------------------|-------------------------|
| GET    | `/tasks`              | Get all tasks           |
| POST   | `/tasks`              | Add a new task          |
| PUT    | `/tasks/:id`          | Update task by ID       | 

---

## 🧪 Testing DnD on Mobile?

> Mobile drag-and-drop may have limited support depending on device/browser. Consider long-press support or mobile-friendly alternatives for production apps.

---

## Self Evaluation

> I need to host and make backend and frontend as two different folders. I need to add delte functionality. I pretty much followed best practices. The only drawback is backend folder structure and I have not hosted the code. I have followed component based structure which is efficient in reactjs.In mobile drag and drop is not working. These are the areas that I need to improve in this code.

---

## 📄 License

MIT License © [Your Name]
