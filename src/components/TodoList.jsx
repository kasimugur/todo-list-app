import { useContext, useEffect } from "react";
import SiteContext from "../context/SiteContext";
import { iconCheck, iconCross } from "../pages/Pages";
import activeAdd from "../pages/main.js";
export default function TodoList() {
  const { todos, removeTodo, addComplate } = useContext(SiteContext)
  
  return (
    <>
      <ul className="list">
        {todos.map((item) => {
          return <div key={item.id} className="list-item">
            <span
              onClick={() => addComplate(item.id)}
              className="check-span">{iconCheck} </span>
            <li
              style={{
                textDecoration: item.isComplate ? 'line-through' : '',
                color: item.isComplate ? '#d2d3db' : ''
              }}>  {item.text}  </li>
            <span onClick={() => removeTodo(item.id)} className="cross-span">{iconCross} </span>
          </div>
        })}
      </ul>
      <div className="card-footer">
        <span>{todos.length} items left</span>
        <div className="btn">
          <button onClick={() => activeAdd()}  className="btn-active active" >All</button>
          <button onClick={() => activeAdd()}  className="btn-active" >Active</button>
          <button onClick={() => activeAdd()}  className="btn-active" >Completed</button>
        </div>
        <button>Clear Completed</button>
      </div>

    </>
  )
}