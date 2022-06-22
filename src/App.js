import './App.css';
import {Routes,Route} from "react-router-dom";
import All from './pages/All';
import Active from './pages/Active';
import Completed from './pages/Completed';

function App() {
  return (
    <Routes>
     <Route path='/' element={<All/>} />
     <Route path='/active' element={<Active/>}/>
     <Route path='completed' element={<Completed />}/>
    </Routes>
  );
}

export default App;
