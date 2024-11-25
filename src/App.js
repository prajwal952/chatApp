import './App.css';
import {  Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Chat from './Pages/Chat/Chat';
import ProfileUPdate from './Pages/ProfileUpdate/ProfileUPdate';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/chat' element={<Chat/>} /> 
      <Route path='/profile' element={<ProfileUPdate/>} />
    </Routes>
    </>
  );
}

export default App;
