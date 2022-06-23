import React, { useEffect } from 'react'
import {useTodoContext, ACTION_TYPES} from "../state/initialState";
import {ItemStyled} from "./TodoItemStyled";
import bin from "../assets/61-trash.svg"
import Swal from 'sweetalert2';

function TodoItem({item}) {

   const showingCompleted =()=>{
      Swal.fire({
        toast: true,
        icon: 'info',
        title: 'your action has successfully done',
        // animation: false,
        position: 'top',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        // didOpen: (toast) => {
        //   toast.addEventListener('mouseenter', Swal.stopTimer)
        //   toast.addEventListener('mouseleave', Swal.resumeTimer)
        // }
      })
    }
   
    const {state, dispatch} =useTodoContext();
  console.log(state)

    const handleCompleted =()=>{
        dispatch({type:ACTION_TYPES.MAKE_COMPLETED, payload:{id:item.id}});
        showingCompleted();
       
    }
    const handleDelete =()=>{
        dispatch({type:ACTION_TYPES.DELETE_TODO, payload:{id:item.id}})
    }

   
  return (
    <ItemStyled>
      <div>
      <input type="checkbox" checked={item.isCompleted} onChange={handleCompleted} name ={item.description}/> 
       <label style={item.isCompleted ? {textDecoration: "line-through"}:null} htmlFor={item.description}>{item.description}
        </label>
      </div>
        {item.isCompleted &&<span onClick={handleDelete}><img src ={bin} alt ="recycle bin"/></span>}
    </ItemStyled>
  )
}

export default TodoItem;