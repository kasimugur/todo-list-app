import { useContext, useEffect } from "react";
import SiteContext from "../context/SiteContext";
import  { iconCross } from "../pages/Pages";
import activeAdd from "../pages/main.js";
export default function TodoList() {
  const {
    todos, removeTodo, addComplate,
    filtredTodos, setFilter, removeCompleted,
    IconCheck,trick
  } = useContext(SiteContext)

  return (
    <>
      <ul className="list">
        {filtredTodos.map((item) => {
          return <div key={item.id} className="list-item">
            <span
              onClick={() => addComplate(item.id)}
              onClickCapture={() => trick(item.id)}
              className={item.isComplate === true ? "check-span" : ''}
            > {IconCheck} </span>
            <li
              style={{
                textDecoration: item.isComplate ? 'line-through' : '',
                color: item.isComplate ? '#d2d3db' : ''
              }}>  {item.text}  </li>
            <span onClick={() => removeTodo(item.id)} className="cross-span ">{iconCross} </span>
          </div>
        })}
      </ul>
      <div className="card-footer">
        <span>{todos.length} items left</span>
        <div className="btn">
          <button onClick={() => activeAdd()}
            onClickCapture={() => setFilter('all')} className="btn-active active" >All</button>
          <button onClick={() => activeAdd()}
            onClickCapture={() => setFilter('active')} className="btn-active" >Active</button>
          <button onClick={() => activeAdd()}
            onClickCapture={() => setFilter('completed')} className="btn-active" >Completed</button>
        </div>
        <button onClick={() => removeCompleted()}>Clear Completed</button>
      </div>
    </>
  )
}