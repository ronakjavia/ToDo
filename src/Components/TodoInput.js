const TodoInput = ({ addTodo, todo, setToDo }) => {
  return (
    <>
      <div className="input">
        <input
          id="inputText"
          type="text"
          value={todo}
          placeholder="Create your ToDo"
          onChange={(e) => setToDo(e.target.value)}
        />
        <button id="btn" onClick={addTodo}>
          Add ToDo
        </button>
      </div>
    </>
  )
}

export default TodoInput
