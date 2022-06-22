import React from 'react'
import {useTodoContext, ACTION_TYPES} from "../state/initialState"
function TodoItem({item}) {

    const {dispatch} =useTodoContext();
    const handleCompleted =()=>{
        dispatch({type:ACTION_TYPES.MAKE_COMPLETED, payload:{id:item.id}})
    }
    const handleDelete =()=>{
        dispatch({type:ACTION_TYPES.DELETE_TODO, payload:{id:item.id}})
    }
   
  return (
    <div>
        <input type="checkbox" checked={item.isCompleted} onChange={handleCompleted}/>
        <h3>{item.description}</h3>
        {item.isCompleted && <span onClick={handleDelete}>Delete</span>}
    </div>
  )
}

export default TodoItem