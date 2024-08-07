import { useEffect, useState } from 'react'
import '../scss/style.scss'
import IconTheme from './IconTheme'
import TodoList from './TodoList'
import SiteContext from '../context/SiteContext'

export default function Todo() {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) ?
    JSON.parse(localStorage.getItem('todos')) : [])

  const newTodo = {
    id: Date.now(),
    text: todo,
    isComplate: false
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  function handleSubmit(event) {
    event.preventDefault()
    setTodos((prev) => [...prev, newTodo])
    setTodo("")
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addComplate( id) {
    const updatedTodos = todos.map(todo => todo.id === id ? {...todo, isComplate : !todo.isComplate} : todo) 
    setTodos(updatedTodos)
  }

  const data = {
    todos,
    removeTodo,
    addComplate
  }
  return (
    <>
      <SiteContext.Provider value={data}>
        <div className="container">
          <div className="header">
            <h1>TODO</h1>
            <IconTheme />
          </div>
          <form onSubmit={handleSubmit}>
            <input
              value={todo}
              onChange={(e) => setTodo(e.target.value.trim())}
              type="text" placeholder='Create a new todo' />
          </form>
          <div className="card">
            <TodoList />
          </div>
        </div>

      </SiteContext.Provider>
    </>
  )
}