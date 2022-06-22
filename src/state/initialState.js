import { createContext, useContext, useReducer } from "react";

const initialState = {
    todos:[],
}

const ACTION_TYPES ={
    ADD_TODO:"ADD_TODO"
}

function reducer (state, action){
    switch(action.type) {
        case ACTION_TYPES.ADD_TODO :{
            return {...state, todos:[...state.todos, {id:action.payload.id, description:action.payload.description, isCompleted:false}]}
        }
        default: {
            return state;
        }
           
        
    }
}

const Context = createContext(initialState);
const useTodoContext =()=> useContext(Context);

export function ContextProvider({children}){
    const [state, dispatch] = useReducer(reducer, initialState);
    return <Context.Provider value={{state, dispatch}}>
            {children}
    </Context.Provider>
}






export {initialState, reducer, ACTION_TYPES, useTodoContext};