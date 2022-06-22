import React from 'react'
import TodoItem from './TodoItem' 
import {useTodoContext} from "../state/initialState";

function TodoList() {
    const {state} = useTodoContext();
    console.log(state);
  return (
    <TodoItem />
  )
}

export default TodoList;