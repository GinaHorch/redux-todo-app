import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo, toggleTodo, deleteTodo, setFilter } from "./todoSlice"
import { RootState } from "../../app/store"
import styles from "./Todo.module.css"

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
    <div className={styles.container}>
      <h1 className={styles.title}>Redux To-Do List</h1>

      {/* Input Form */}
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className={styles.input}
        />
        <button type="submit" className={styles.addButton}>Add</button>
      </form>

      {/* Filter Buttons */}
      <div className={styles.filters}>
        <button onClick={() => dispatch(setFilter("all"))} className={filter === "all" ? styles.activeFilter : styles.filterButton}>All</button>
        <button onClick={() => dispatch(setFilter("completed"))} className={filter === "completed" ? styles.activeFilter : styles.filterButton}>Completed</button>
        <button onClick={() => dispatch(setFilter("pending"))} className={filter === "pending" ? styles.activeFilter : styles.filterButton}>Pending</button>
      </div>

      {/* Todo List */}
      <ul className={styles.todoList}>
        {todos.map(todo => (
          <li key={todo.id} className={styles.todoItem} style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
          <span className={styles.todoText}>{todo.text}</span>
          <div>
              <button onClick={() => dispatch(toggleTodo(todo.id))} className={styles.toggleButton}>
                {todo.completed ? "Undo" : "Complete"}
              </button>
              <button onClick={() => dispatch(deleteTodo(todo.id))} className={styles.deleteButton}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}