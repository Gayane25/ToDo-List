import React from 'react';
import TodoItem from '../components/TodoItem';
import {useTodoContext, ACTION_TYPES} from "../state/initialState"
function Completed() {
    const {state, dispatch} = useTodoContext();
    
    const deleteAll =()=>{
        dispatch({type:ACTION_TYPES.DELETE_ALL})
    }
  return (
    <div>
        {
            state.todos.filter((item)=>item.isCompleted ===true).map((item)=><TodoItem key ={item.id} item={item}/>)
        }
         <button onClick={deleteAll}>Delete all</button>
    </div>
  )
}

export default Completed;