import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/register' index element =  {<Register/>} />
          <Route path='/login' index element = {<Login/>} />
          <Route path="*" element = {<Register/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
