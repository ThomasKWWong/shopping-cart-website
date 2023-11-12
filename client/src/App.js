import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './pages/Register'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element =  {<Register/>} />
          <Route path="*" element = {<Register/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
