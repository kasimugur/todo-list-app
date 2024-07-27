import { iconCheck, iconCross } from "../pages/Pages";

export default function TodoList() {
  return (
    <>
      <ul className="list">
        <div className="list-item">
          <span className="check-span">{iconCheck} </span>
          <li>  Lorem, ipsum dolor.  </li>
          <span className="cross-span">{iconCross} </span>
        </div>
        <div className="list-item">
          <span className="check-span">{iconCheck} </span>
          <li>  Lorem, ipsum dolor.  </li>
          <span className="cross-span">{iconCross} </span>
        </div>
        <div className="list-item">
          <span className="check-span">{iconCheck} </span>
          <li>  Lorem, ipsum dolor.  </li>
          <span className="cross-span">{iconCross} </span>
        </div>
        <div className="list-item">
          <span className="check-span">{iconCheck} </span>
          <li>  Lorem, ipsum dolor.  </li>
          <span className="cross-span">{iconCross} </span>
        </div>
        <div className="list-item">
          <span className="">{iconCheck} </span>
          <li>  Lorem, ipsum dolor.  </li>
          <span className="cross-span">{iconCross} </span>
        </div>
        <div className="list-item">
          <span className="check-span">{iconCheck} </span>
          <li>  Lorem, ipsum dolor.  </li>
          <span className="cross-span">{iconCross} </span>
        </div>
        <div className="list-item">
          <span className="check-span">{iconCheck} </span>
          <li>  Lorem, ipsum dolor.  </li>
          <span className="cross-span">{iconCross} </span>
        </div>
        <div className="list-item">
          <span className="check-span">{iconCheck} </span>
          <li>  Lorem, ipsum dolor.  </li>
          <span className="cross-span">{iconCross} </span>
        </div>
        
      </ul>
      <div className="card-footer">
        <span>5 items left</span>
        <div className="btn">
          <button className="active">All</button>
          <button>Active</button>
          <button>Completed</button>
        </div>
        <button>Clear Completed</button>
      </div>

    </>
  )
}