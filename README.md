# Redux To-Do App (Vite + Redux Toolkit + Redux Persist)

This is a **Redux-powered To-Do List app** built using [Vite](https://vitejs.dev/), [Redux Toolkit](https://redux-toolkit.js.org/), and [TypeScript](https://www.typescriptlang.org/).  
It supports:
✅ **Adding tasks**  
✅ **Marking tasks as complete/incomplete**  
✅ **Filtering tasks (All, Completed, Pending)**  
✅ **Persisting state with Redux Persist**  
✅ **Responsive Design for Mobile Devices**  

---

## 🚀 **Getting Started**

### **1️⃣ Clone the Repository**
```sh
git clone <your-repo-url>
cd your-repo
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Run the Development Server**
```sh
npm run dev
```
Then open http://localhost:5173 in your browser.

🛠 Tech Stack
Vite – Fast front-end build tool
React – Component-based UI
TypeScript – Static typing for better maintainability
Redux Toolkit – Simplifies state management
Redux Persist – Saves Redux state across refreshes
CSS Modules – Scoped styles for modular design

🏗 Project Structure
my-practice/
│── src/
│   ├── app/
│   │   ├── store.ts           # Redux Store Setup
│   │   ├── hooks.ts           # Typed Redux Hooks
│   ├── features/
│   │   ├── counter/           # Default Redux counter example
│   │   ├── quotes/            # API example using RTK Query
│   │   ├── todo/              # Redux Todo Slice (State Management)
│   ├── components/
│   │   ├── Todo.tsx           # Todo List Component
│   │   ├── Todo.module.css     # Component-Specific Styling
│   ├── App.tsx                # Root Component
│   ├── main.tsx               # React + Redux Provider Setup
│── package.json
│── README.md
│── tsconfig.json
│── vite.config.ts

🌟 Features
✅ State Management with Redux Toolkit
Redux Toolkit (@reduxjs/toolkit) simplifies state management:

Slices (todoSlice.ts) manage To-Do state (add, toggle, delete, filter).
Reducers handle UI updates efficiently.
✅ Redux Persist (State Persistence)
Todos remain saved across page refreshes.
Configured via redux-persist in store.ts.
✅ Filters (All, Completed, Pending)
Users can filter tasks using Redux state.
✅ CSS Modules for Styling
Scoped styles avoid conflicts with global styles.
Responsive design works on mobile screens.

📜 Available Scripts
```sh
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm test         # Run tests
```
