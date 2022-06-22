import React, {useId, useState} from 'react';
import { ACTION_TYPES} from "../state/initialState";

function TodoForm({dispatch}) {

    let todoId = (useId() + Math.random()*10);
    const [description, setDescription] = useState("");

    const addTodo = (evt)=>{
        evt.preventDefault();
        dispatch({type: ACTION_TYPES.ADD_TODO, payload:{id:todoId, description:description}});
        setDescription("");
        
    }

  return (
    <form onSubmit ={addTodo}>
      <input type="text" value ={description} onChange ={(event)=>setDescription(event.target.value)} placeholder='add details'/>
      <button>Add</button>
    </form>
  )
}

export default TodoForm