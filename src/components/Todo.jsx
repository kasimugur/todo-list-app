import { useEffect, useMemo, useState } from 'react'
import '../scss/style.scss'
import IconTheme from './IconTheme'
import TodoList from './TodoList'
import SiteContext from '../context/SiteContext'
import { iconCheck } from '../pages/Pages'

export default function Todo() {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) ?
    JSON.parse(localStorage.getItem('todos')) : [])
  const [filter, setFilter] = useState('all')
  const [strokess,setStroke] = useState('')

  const newTodo = {
    id: Date.now(),
    text: todo,
    isComplate: false
  }



  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const filtredTodos = useMemo(() => {
    switch (filter) {
      case ('all'):
        return todos;
      case ('active'):
        return todos.filter(todo => !todo.isComplate);
      case ('completed'):
        return todos.filter(todo => todo.isComplate);
      default:
        return todos;
    }
  }, [todos, filter])

  function handleSubmit(event) {
    event.preventDefault()
    setTodos((prev) => [...prev, newTodo])
    setTodo("")
  }
// console.log(iconCheck ),"lkjdsda----asdS--")
  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function removeCompleted() {
    setTodos(todos.filter(todo => !todo.isComplate))
  }


  function addComplate(id) {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, isComplate: !todo.isComplate } : todo)
    setTodos(updatedTodos)
    setStroke('#fff')
    
  }

  const data = {
    todos,
    removeTodo,
    addComplate,
    setFilter,
    filtredTodos,
    removeCompleted,
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
              min={3}
              max={40}
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