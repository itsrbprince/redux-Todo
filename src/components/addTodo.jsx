import React, {useState} from 'react'
import { addTodo } from '../Features/reducer'
import { useDispatch } from 'react-redux'


export const Addtodo = () => {

  const [todo, setTodo] = useState("")

  const dispatch = useDispatch()

  const addTodoHandler=(e)=>{
        e.preventDefault()

        if(todo.length<1) return
        dispatch(addTodo(todo))
        setTodo("")
  }

  return (
    <>
    <form onSubmit={addTodoHandler} className='pb-6 mt-9'>
      <input 
      type='text' value={todo}
      placeholder='Add a Task ......'
      className='rounded-full px-5 border-b-2 border-red-700 border-spacing-4 outline-none placeholder-red-800 placeholder-opacity-70 pl-3'
      onChange={(e)=>setTodo(e.target.value)}/>
      <button type='submit' className='bg-red-950 text-gray-100 -ml-12 h-7 shadow-sm shadow-zinc-950 rounded-full w-20'>Add</button>
    </form>
    </>
  )
}
