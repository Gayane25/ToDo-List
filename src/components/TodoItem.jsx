import React from 'react'
import {useTodoContext, ACTION_TYPES} from "../state/initialState";
import {ItemStyled} from "./TodoItemStyled";
import bin from "../assets/61-trash.svg"

function TodoItem({item}) {
   
    const {dispatch} =useTodoContext();
    const handleCompleted =()=>{
        dispatch({type:ACTION_TYPES.MAKE_COMPLETED, payload:{id:item.id}})
    }
    const handleDelete =()=>{
        dispatch({type:ACTION_TYPES.DELETE_TODO, payload:{id:item.id}})
    }
   
  return (
    <ItemStyled>
      <input type="checkbox" checked={item.isCompleted} onChange={handleCompleted} name ={item.description}/> 
       <label style={item.isCompleted ? {textDecoration: "line-through"}:null} htmlFor={item.description}>{item.description}
        </label>
        {item.isCompleted && <span onClick={handleDelete}><img src ={bin} alt ="recycle bin"/></span>}
    </ItemStyled>
  )
}

export default TodoItem;