import './App.css';
import {useEffect} from "react"
import {Routes,Route} from "react-router-dom";
import All from './pages/All';
import Active from './pages/Active';
import Completed from './pages/Completed';
import Header from './components/Header';
import {useTodoContext} from "./state/initialState"

function App() {

const {state}=useTodoContext();

  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(state))
  },[state])

  return (
    <>
      <Header /><br/>
      <Routes> 
        <Route path='/' element={<All/>} />
        <Route path='/active' element={<Active/>}/>
        <Route path='/completed' element={<Completed />}/>
      </Routes>
    </>
  );
}

export default App;
