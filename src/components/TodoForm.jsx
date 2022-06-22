import React, {useId, useState} from 'react';
import {useTodoContext, ACTION_TYPES} from "../state/initialState";

function TodoForm() {

    const todoId = useId();
    const {state, dispatch} = useTodoContext();
    const [description, setDescription] = useState("");

    const addTodo = (evt)=>{
        evt.preventDefault();
        dispatch({type: ACTION_TYPES.ADD_TODO, payload:{id:todoId, description:description}});
        setDescription("");
        console.log(state);

    }

  return (
    <form onSubmit ={addTodo}>
      <input type="text" value ={description} onChange ={(event)=>setDescription(event.target.value)} placeholder='add details'/>
      <button>Add</button>
    </form>
  )
}

export default TodoForm