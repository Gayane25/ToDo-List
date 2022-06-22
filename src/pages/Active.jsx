import React from 'react'
import TodoForm from '../components/TodoForm';
import TodoItem from '../components/TodoItem';
import {useTodoContext} from "../state/initialState"

function Active() {
    const {state} =useTodoContext();
    
    
  return (
    <div>
        <TodoForm />
    {state.todos.filter((item)=>item.isCompleted===false).map((item)=><TodoItem key ={item.id} item={item}/>)}
    </div>
  )
}

export default Active;