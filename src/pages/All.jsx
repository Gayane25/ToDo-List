import React from 'react'
import TodoForm from '../components/TodoForm'
import TodoItem from '../components/TodoItem';
import {useTodoContext, ACTION_TYPES} from "../state/initialState";

function All() {
    const {state, dispatch} = useTodoContext();

   
  return (
    <div>
        <TodoForm dispatch={dispatch}/>
        {state.todos.map((item)=><TodoItem key ={item.id} item={item} />)}
       
    </div>
  )
}

export default All