import React, {useId, useState} from 'react';
import { ACTION_TYPES, useTodoContext} from "../state/initialState";
import {FormStyled} from "./TodoFormStyled";
function TodoForm() {

    let todoId = (useId() + Math.random()*10);
    const {dispatch} = useTodoContext();
    const [description, setDescription] = useState("");

    const addTodo = (evt)=>{
        evt.preventDefault();
        dispatch({type: ACTION_TYPES.ADD_TODO, payload:{id:todoId, description:description}});
        setDescription("");
        
    }

  return (
    <FormStyled onSubmit ={addTodo}>
      <input type="text" value ={description} onChange ={(event)=>setDescription(event.target.value)} placeholder='add details'/>
      <button>Add</button>
    </FormStyled>
  )
}

export default TodoForm