import { useEffect, useState } from 'react'
import '../scss/style.scss'
import IconTheme from './IconTheme'
import TodoList from './TodoList'

export default function Todo() {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault()
  }
  console.log(todos)
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todoss')) || [];
    setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = () => {
    const newTodo = {
      id: todos.length + 1, todo
    };
    setTodos([...todos, newTodo])
  }

  const removeTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id)
    setTodos(updatedTodos)
  }

  return (
    <>
      <div className="container">
        <div className="header">
          <h1>TODO</h1>
          <IconTheme />
        </div>
        <form onSubmit={handleSubmit}>
          <input
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            type="text" name="" id="" placeholder='Create a new todo' />
        </form>
        <div className="card">
          <TodoList />
        </div>
      </div>


    </>
  )
}