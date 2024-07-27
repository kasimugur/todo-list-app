import { useState } from 'react'
import '../scss/style.scss'
import IconTheme from './IconTheme'
import TodoList from './TodoList'

export default function Todo() {
const [todo , setTodo] = useState('')


const handleSubmit = (event) => {
  event.preventDefault()
}

  return (
    <>
      <div className="container">
        <div className="header">
          <h1>TODO</h1>
          <IconTheme />
        </div>
        <input 
        onSubmit={handleSubmit} value={todo} 
        onChange={(e) => setTodo(e.target.value)}
        type="text" name="" id="" placeholder='Create a new todo' />
        <div className="card">
          {todo}
          <TodoList />
        </div>
      </div>


    </>
  )
}