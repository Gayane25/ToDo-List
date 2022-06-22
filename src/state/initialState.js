import { createContext, useContext, useReducer } from "react";

const initialState = {
    todos:[],
    deletingTodoMode:false
}

const ACTION_TYPES ={
    ADD_TODO:"ADD_TODO",
    MAKE_COMPLETED:"MAKE_COMPLETED",
    DELETE_TODO:"DELETE_TODO",
    DELETE_ALL:"DELETE_ALL",
    READY_TO_DELETE:"READY_TO_DELETE"
    
}

function reducer (state, action){
    switch(action.type) {
        case ACTION_TYPES.ADD_TODO :{
            return {...state, todos:[...state.todos, {id:action.payload.id, description:action.payload.description, isCompleted:false}]}
        }
        case ACTION_TYPES.MAKE_COMPLETED :{
            const completed = state.todos.map((todo)=>{
                if(todo.id ===action.payload.id){
                    return {...todo, isCompleted:!todo.isCompleted}
                } else{
                    return todo;
                }
            });
            return {
                ...state,
                todos:completed,
            }
        }
        case ACTION_TYPES.READY_TO_DELETE :{
            return {
                ...state,
                deletingTodoMode:true
            }
        }
        case ACTION_TYPES.DELETE_TODO :{
            let newtodolist = state.todos.filter((item)=>item.id !== action.payload.id)
            return {...state,todos:newtodolist}
        }
        case ACTION_TYPES.DELETE_ALL :{
            let deleted = state.todos.filter((item)=>item.isCompleted !==true)
            return {
                ...state, todos:deleted
            }
        }
        default: {
            return state;
        }
           
        
    }
}

const Context = createContext(initialState);
const useTodoContext =()=> useContext(Context);

export function ContextProvider({children}){
    const [state, dispatch] = useReducer(reducer, initialState,()=>{
        const localData = localStorage.getItem('todos');
        return localData? JSON.parse(localData):initialState
      });
    return <Context.Provider value={{state, dispatch}}>
            {children}
    </Context.Provider>
}






export {initialState, reducer, ACTION_TYPES, useTodoContext};