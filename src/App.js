import { useState } from 'react'
import TodoInput from './Components/TodoInput'
import TodoList from './Components/TodoList'
import './App.css'

const App = () => {
  const [todos, setToDolist] = useState([])
  const [todo, setToDo] = useState(() => '')

  const addTodo = () => {
    if (todo !== '') {
      setToDolist([...todos, todo])
      setToDo('')
    }
  }

  const editTodo = (data) => {
    const editTodo = data
    setToDo(editTodo)
    const remove = todos.filter((todo) => {
      return todo !== data
    })
    setToDolist(remove)
  }

  const deleteTodo = (data) => {
    const abc = todos.filter((todo) => {
      return todo !== data
    })
    setToDolist(abc)
  }
  return (
    <div id="box">
      <div id="name">React ToDo App</div>
      <TodoInput todo={todo} setToDo={setToDo} addTodo={addTodo} />
      <TodoList editTodo={editTodo} deleteTodo={deleteTodo} todos={todos} />
    </div>
  )
}

export default App
