import { useContext, useEffect } from "react";
import SiteContext from "../context/SiteContext";
import { iconCross } from "../pages/Pages";

export default function TodoList() {
  const {
    todos, removeTodo, addComplate,
    filtredTodos, setFilter, removeCompleted,
    IconCheck, trick
  } = useContext(SiteContext)

  const IconCheck1 = (<svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
    <path fill="none"  stroke-width="2" d="M1 4.304L3.696 7l6-6"
    />
  </svg>);
  
  return (
    <>
      <ul className="list">
        {filtredTodos.map((item) => {
          return <div key={item.id} className="list-item">
            <span
              onClick={() => addComplate(item.id)}
              onClickCapture={() => trick(item.id)}
              className={item.isComplate === true ? "check-span" : ''}
            >  {item.isComplate === true ? IconCheck : IconCheck1} </span>
            <li
              style={{
                textDecoration: item.isComplate ? 'line-through' : '',
                color: item.isComplate ? '#d2d3db' : ''
              }}>  {item.text}  </li>
            <span onClick={() => removeTodo(item.id)} className="cross-span ">{iconCross} </span>
          </div>
        })}
      </ul>
      <div className="btn-bar">
      <span>{todos.length} items left</span> 
      <button onClick={() => removeCompleted()}>Clear Completed</button>
      </div>
    </>
  )
}