import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo, completeTodo } from '../Features/reducer'
import { GiCheckMark } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { FaPen } from "react-icons/fa";


export const TodoList = () => {

  const [updatedTodo, setUpdateTodo] = useState("")
  const [updateId, setUpdateId] = useState("")
  var i = 0;

  const todos = useSelector(state => state.todos)
  var i = todos.length

  useEffect(() => {
    console.log("todo : ", ...todos)
  }, [todos])

  const dispatch = useDispatch();

  const updateTododHandler = (id, data) => {
    setUpdateTodo(data)
    setUpdateId(id)

  }

  const saveHandler = (id) => {
    if (updatedTodo < 1) return
    dispatch(updateTodo({ id, updatedTodo }))
    setUpdateId("")
    setUpdateTodo("")
  }

  todos.map((todo) => todo.completed ? i-- : i++)




  return (<>
    <div className=''>
      <button className='mr-3 cursor-auto mb-3 bg-teal-600 rounded-full shadow-sm shadow-slate-950 text-slate-100 w-20'>Task : {todos.length}</button>
      <button className='mb-3 cursor-auto bg-teal-600 rounded-full shadow-sm shadow-slate-950 text-slate-100 w-24'>Active : {i / 2}</button>
    </div>
    <div className='inline-block pt-4 max-w-sm h-96 bg-teal-200/10 rounded-xl shadow-inner shadow-red-600 overflow-y-auto'>


      <ul>
        {todos.map((todo, index) => (
          <div className='flex justify-center px-4 pt-2 pb-3'>

            <li key={todo.id}>
              {/* checkbox */}
              <input type='checkbox'
                className='mr-2 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2'
                checked={todo.completed}
                onChange={() => dispatch(completeTodo(todo.id))} />

              {/* input  */}
              <input className={`text-white max-sm:w-32 md:font-semibold bg-inherit outline-none pl-2 mr-2
               ${todo.completed ? "line-through text-opacity-40" : ""}
               ${updateId !== todo.id ? "" : "border-b-2 border-red-600 text-red-500"}`}
                type='text'
                defaultValue={todo.text}
                onChange={(e) => setUpdateTodo(e.target.value)}
                disabled={updateId !== todo.id} />


              {/* delete  */}
              <button className='bg-red-600 text-white text-xs shadow-sm shadow-zinc-950 rounded-full pl-2 w-7 h-7'
                onClick={() => dispatch(removeTodo(todo.id))}
              ><ImCross className='hover:text-gray-900' /></button>

              {/*edit and save */}
              {updateId !== todo.id || todo.completed ?
                <button className='bg-red-600 text-white text-xs shadow-sm shadow-zinc-950 rounded-full pl-2 w-7 h-7 ml-4'
                  onClick={() => updateTododHandler(todo.id, todo.text)}
                  disabled={todo.completed}
                ><FaPen className='hover:text-gray-900' /></button>
                : <button className='bg-red-600 text-white shadow-sm shadow-zinc-950 rounded-full pl-1.5 w-7 h-7 ml-4'
                  onClick={() => saveHandler(todo.id)}
                ><GiCheckMark className='hover:text-gray-900' /></button>
              }
            </li>
          </div>
        ))}
      </ul>

    </div>
  </>
  )
}
