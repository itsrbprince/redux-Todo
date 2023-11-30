import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[{id:1, text:"Task1", completed:false}]
}

export const todoSlice = createSlice({
    name:'todos',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo = {
                id : nanoid(),
                text : action.payload,
                completed : false
            }
           state.todos.push(todo)
        },

        removeTodo:(state,action)=>{
            console.log("id : ", action.payload)
               state.todos = state.todos.filter((item)=> item.id !== action.payload);
        },
        updateTodo:(state,action)=>{
            console.log(state, "state")
             
            console.log("payid",action.payload)
            
              var data=action.payload.updatedTodo;
              var UpdateId = action.payload.id

              console.log("pay",data,"   ",UpdateId)
                state.todos = state.todos.map((todo)=> (todo.id === UpdateId ? {...todo,text:data} : todo))
              
            },
        completeTodo:(state,action)=>{
         state.todos = state.todos.map((todo)=>(todo.id===action.payload? { ...todo, completed: !todo.completed } : todo))
        }
    }
})

export const {addTodo, removeTodo, updateTodo, completeTodo}=todoSlice.actions

export default todoSlice.reducer