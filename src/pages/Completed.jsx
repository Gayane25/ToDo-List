import React, {useState} from 'react';
import TodoItem from '../components/TodoItem';
import {useTodoContext, ACTION_TYPES} from "../state/initialState";
import { DeleteButton } from '../components/DeleteButtonStyled';
import bin from "../assets/61-trash-white.svg"

function Completed() {
    const {state, dispatch} = useTodoContext();
  const [recyclebin, setRecycleBin] = useState(false);
    const deleteAll =()=>{
        dispatch({type:ACTION_TYPES.DELETE_ALL})
    }
    
  return (
    <div>
        { 
            state.todos.filter((item)=>item.isCompleted ===true).map((item)=><TodoItem key ={item.id} item={item} setRecycleBin={setRecycleBin}/>)
        }
        <div style={{textAlign:"end"}}>
         <DeleteButton onClick={deleteAll}><img src={bin} alt ="delete"/> Delete all</DeleteButton>
         </div>
    </div>
  )
}

export default Completed;