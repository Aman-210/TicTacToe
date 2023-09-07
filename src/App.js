
import './App.css';
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Home from './Components/Home';
import Main from './Components/Main';



function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route  path='/' element = {<Home/>}   />
      <Route  path='/main' element = {<Main/>}   />


     </Routes>

    </BrowserRouter>
  );
}

export default App;
