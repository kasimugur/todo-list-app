import React, { useContext } from 'react'
import SiteContext from '../context/SiteContext'

export default function CardFooter() {
  const {
    todos,  setFilter, removeCompleted,
  } = useContext(SiteContext)
  return (
    <>
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
