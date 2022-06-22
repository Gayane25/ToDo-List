import React from 'react'
import TodoItem from './TodoItem' 

function TodoList({state}) {
    
  return (
    <div>
    {state.todos.map((item)=><TodoItem key ={item.id} item={item} />)}
    </div>
  )
}

export default TodoList;