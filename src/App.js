import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Navbar from './Components/Shared/Navbar';
import EnrolledFriends from './Components/Home/EnrolledFriends';

function App() {
  return (
    <div className='app'>
    <Navbar></Navbar>
     <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="enrolled_friends" element={<EnrolledFriends></EnrolledFriends>}></Route>
     </Routes>
    </div>
  );
}

export default App;
