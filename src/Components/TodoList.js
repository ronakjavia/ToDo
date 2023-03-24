const TodoList = ({ editTodo, deleteTodo, todos }) => {
  return (
    <>
      {' '}
      {todos?.length > 0 ? (
        <ul className="ul">
          {todos.map((x, index) => (
            <div className="todolist">
              <li className="li" key={index}>
                {x}
              </li>

              <div className="btn">
                <button
                  id="btn"
                  onClick={() => {
                    editTodo(x)
                  }}
                >
                  Edit
                </button>
                <button
                  id="btn"
                  onClick={() => {
                    deleteTodo(x)
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </ul>
      ) : (
        <div id="noData">
          <h1>No Todo's Found</h1>
        </div>
      )}
    </>
  )
}

export default TodoList
