import { createSlice, PayloadAction } from "@reduxjs/toolkit"

// Define the shape of the state
interface Todo {
  id: number
  text: string
  completed: boolean
}

interface TodoState {
  todos: Todo[]
  filter: "all" | "completed" | "pending"
}

// Initial state
const initialState: TodoState = {
  todos: [],
  filter: "all",
}

// Create the slice
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push({ id: Date.now(), text: action.payload, completed: false })
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find(todo => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
    },
    setFilter: (state, action: PayloadAction<"all" | "completed" | "pending">) => {
      state.filter = action.payload
    },
  },
})

// Export the actions
export const { addTodo, toggleTodo, deleteTodo, setFilter } = todoSlice.actions

// Export the reducer
export default todoSlice.reducer
