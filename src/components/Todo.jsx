import { useEffect, useMemo, useState } from 'react'
import '../scss/style.scss'
import IconTheme from './IconTheme'
import TodoList from './TodoList'
import SiteContext from '../context/SiteContext'
import CardFooter from './CardFooter'

export default function Todo() {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) ?
    JSON.parse(localStorage.getItem('todos')) : [])
  const [filter, setFilter] = useState('all')

  const newTodo = {
    id: Date.now(),
    text: todo,
    isComplate: false
  }


  const IconCheck = (<svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
    <path fill="none" stroke='#fff' stroke-width="2" d="M1 4.304L3.696 7l6-6"
    />
  </svg>);


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
    if (todo.trim() !== "" && todo.length > 3) {
      setTodos((prev) => [...prev, newTodo])
      setTodo("")
    }
  }
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

  }

  const data = {
    todos,
    removeTodo,
    addComplate,
    setFilter,
    filtredTodos,
    removeCompleted,
    IconCheck
    // trick
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
              onChange={(e) => setTodo(e.target.value)}
              type="text" placeholder='Create a new todo' />
          </form>
          <div className="card">
            <TodoList />
          </div>
          <CardFooter />
        </div>

      </SiteContext.Provider>
    </>
  )
}