import React from 'react'
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList';
import {useTodoContext, ACTION_TYPES} from "../state/initialState";

function All() {
    const {state, dispatch} = useTodoContext();

    const deleteAll =()=>{
        dispatch({type:ACTION_TYPES.DELETE_ALL})
    }
  return (
    <div>
        <TodoForm dispatch={dispatch}/>
        <TodoList state={state}/>
        <button onClick={deleteAll}>Delete all</button>
    </div>
  )
}

export default All