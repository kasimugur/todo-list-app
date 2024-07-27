import '../scss/style.scss'
import IconTheme from './IconTheme'
import TodoList from './TodoList'

export default function Todo() {
  return (
    <>
      <div className="container">
        <div className="header">
          <h1>TODO</h1>
          <IconTheme />
        </div>
        <input type="text" name="" id="" placeholder='Create a new todo' />
        <div className="card">
          <TodoList />
        </div>
      </div>


    </>
  )
}