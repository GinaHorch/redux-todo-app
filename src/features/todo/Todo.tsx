import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo, toggleTodo, deleteTodo, setFilter } from "./todoSlice"
import { RootState } from "../../app/store"

export default function Todo() {
  const [task, setTask] = useState("")
  const todos = useSelector((state: RootState) => {
    if (state.todo.filter === "completed") {
      return state.todo.todos.filter(todo => todo.completed)
    }
    if (state.todo.filter === "pending") {
      return state.todo.todos.filter(todo => !todo.completed)
    }
    return state.todo.todos
  })
  const filter = useSelector((state: RootState) => state.todo.filter)
  const dispatch = useDispatch()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (task.trim()) {
      dispatch(addTodo(task))
      setTask("")
    }
  }

  return (
    <div style={styles.container}>
      <h1>Redux To-Do List</h1>

      {/* Input Form */}
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.addButton}>Add</button>
      </form>

      {/* Filter Buttons */}
      <div style={styles.filters}>
        <button onClick={() => dispatch(setFilter("all"))} style={filter === "all" ? styles.activeFilter : styles.filterButton}>All</button>
        <button onClick={() => dispatch(setFilter("completed"))} style={filter === "completed" ? styles.activeFilter : styles.filterButton}>Completed</button>
        <button onClick={() => dispatch(setFilter("pending"))} style={filter === "pending" ? styles.activeFilter : styles.filterButton}>Pending</button>
      </div>

      {/* Todo List */}
      <ul style={styles.todoList}>
        {todos.map(todo => (
          <li key={todo.id} style={{ ...styles.todoItem, textDecoration: todo.completed ? "line-through" : "none" }}>
            {todo.text}
            <div>
              <button onClick={() => dispatch(toggleTodo(todo.id))} style={styles.toggleButton}>
                {todo.completed ? "Undo" : "Complete"}
              </button>
              <button onClick={() => dispatch(deleteTodo(todo.id))} style={styles.deleteButton}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

// Simple inline styles
const styles: { [key: string]: React.CSSProperties } = {
  container: { textAlign: "center", marginTop: "50px" },
  form: { marginBottom: "20px" },
  input: { padding: "8px", fontSize: "16px", marginRight: "10px" },
  addButton: { padding: "8px 15px", backgroundColor: "#28a745", color: "white", border: "none", cursor: "pointer" },
  filters: { marginBottom: "20px" },
  filterButton: { padding: "5px 10px", margin: "5px", cursor: "pointer", border: "1px solid gray" },
  activeFilter: { padding: "5px 10px", margin: "5px", cursor: "pointer", backgroundColor: "#007bff", color: "white", border: "1px solid gray" },
  todoList: { listStyleType: "none", padding: 0 },
  todoItem: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px", border: "1px solid #ccc", marginBottom: "10px" },
  toggleButton: { marginRight: "10px", padding: "5px 10px", cursor: "pointer" },
  deleteButton: { backgroundColor: "#dc3545", color: "white", padding: "5px 10px", border: "none", cursor: "pointer" },
}
