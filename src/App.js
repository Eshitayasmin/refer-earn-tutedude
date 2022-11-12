import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className='app'>
      
     <Routes>
      <Route path="/" element={<Home></Home>}></Route>
     </Routes>
    </div>
  );
}

export default App;
