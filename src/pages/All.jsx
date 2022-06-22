import React from 'react'
import TodoForm from '../components/TodoForm'
import TodoItem from '../components/TodoItem';
import {useTodoContext} from "../state/initialState";

function All() {
    const {state} = useTodoContext();

   
  return (
    <div>
        <TodoForm/>
        {state.todos.map((item)=><TodoItem key ={item.id} item={item} />)}
       
    </div>
  )
}

export default All