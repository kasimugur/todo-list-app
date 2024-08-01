import { useEffect, useState } from 'react'
import '../scss/style.scss'
import IconTheme from './IconTheme'
import TodoList from './TodoList'

export default function Todo() {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])
  

  useEffect(() => {
    const storedTodo = localStorage.getItem('todos')
    if (storedTodo) {
      setTodos(storedTodo)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  function handleSubmit(event) {
    event.preventDefault()
    const newTodo = { id: Date.now(), text: todo }
    addTodo(newTodo)
    setTodo('')
  }
  const addTodo = (todo) => {
    setTodos([...todos, todo])
  }
  const removeTodo = () => { }

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
            type="text" placeholder='Create a new todo' />
        </form>
        <div className="card">
          <TodoList />
        </div>
      </div>


    </>
  )
}