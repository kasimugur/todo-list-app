
export default function TodoList() {
  return (
    <>
      <ul className="list">
        <li className="list-item">Lorem, ipsum dolor.</li>
        <li className="list-item">Accusantium, quas. Hic?</li>
        <li className="list-item">Tempora, atque molestiae?</li>
        <li className="list-item">Eius, sint error!</li>
        <li className="list-item">Sed, blanditiis dignissimos!</li>
        <li className="list-item">Voluptates, nihil nesciunt.</li>
      </ul>
      <div className="card-footer">
        <span>5 items left</span>
        <div className="btn">
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
        </div>
    <button>Clear Completed</button>
      </div>

    </>
  )
}