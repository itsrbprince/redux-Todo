import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo, completeTodo } from '../Features/reducer'
import { GiCheckMark } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { FaPen } from "react-icons/fa";



export const TodoList = () => {

  const [completeCount, setCompleteCount] = useState("")
  const [updatedTodo, setUpdateTodo] = useState("")
  const [updateId, setUpdateId] = useState("")
  var i = 0;

  const todos = useSelector(state => state.todos)

  useEffect(() => {
    console.log("todo : ", ...todos)
  }, [todos])

  const dispatch = useDispatch();

  const updateTododHandler = (id, data) => {
    // console.log("edit id : ", id)
    setUpdateTodo(data)
    setUpdateId(id)

  }

  const saveHandler = (id) => {
    if (updatedTodo < 1) return
    dispatch(updateTodo({ id, updatedTodo }))
    setUpdateId("")
    setUpdateTodo("")
  }




  return (
    <div className=''>
      <button className='ml-80 mb-3 bg-red-950 rounded-full shadow-sm shadow-slate-950 text-slate-100 w-20'>Task : {todos.length}</button>

      <ul >
        {todos.map((todo, index) => (
          <div className='flex justify-center px-4 pt-1 pb-3'>
            <li key={todo.id}>
              {/* checkbox */}
              <input type='checkbox'
                className='mr-3'
                checked={todo.completed}
                onChange={() => dispatch(completeTodo(todo.id))} />

              {/* input  */}
              <input className={`text-gray-300 bg-inherit outline-none pl-2 mr-2
               ${todo.completed ? "line-through text-opacity-50" : ""}
               ${updateId !== todo.id ? "" : "border-b-2 border-red-800 text-red-900"}`}
                type='text'
                defaultValue={todo.text}
                onChange={(e) => setUpdateTodo(e.target.value)}
                disabled={updateId !== todo.id} />

              {/* delete  */}
              <button className='bg-red-950 text-orange-500 text-xs shadow-sm shadow-zinc-950 rounded-full pl-2 w-7 h-7'
                onClick={() => dispatch(removeTodo(todo.id))}
              ><ImCross className='hover:text-gray-200' /></button>

              {/*edit and save */}
              {updateId !== todo.id || todo.completed ?
                <button className='bg-red-950 text-orange-500 text-xs shadow-sm shadow-zinc-950 rounded-full pl-2 w-7 h-7 ml-4'
                  onClick={() => updateTododHandler(todo.id, todo.text)}
                  disabled={todo.completed}
                ><FaPen className='hover:text-gray-200' /></button>
                : <button className='bg-red-950 text-orange-500 shadow-sm shadow-zinc-950 rounded-full pl-1.5 w-7 h-7 ml-4'
                  onClick={() => saveHandler(todo.id)}
                ><GiCheckMark className='hover:text-gray-200' /></button>
              }
            </li>
          </div>
        ))}
      </ul>

    </div>
  )
}
