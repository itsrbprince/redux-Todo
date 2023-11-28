import './App.css'
import { Navbar } from './components/Navbar/navbar'
import { Addtodo } from './components/addTodo'
import { TodoList } from './components/todoList'


function App() {

  return (
    <>
      <div className='bg-gray-900 min-h-screen'>
        <Navbar />
        <Addtodo />
        <TodoList />
        
      </div>
    </>
  )
}

export default App
