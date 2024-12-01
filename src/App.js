import './App.css';
import {  Route, Routes, useNavigate } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Chat from './Pages/Chat/Chat';
import ProfileUPdate from './Pages/ProfileUpdate/ProfileUPdate';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Config/firebase';

function App() {

  const navigate=useNavigate()

useEffect(()=>{
  onAuthStateChanged(auth, async(user)=>{
    if(user){
      navigate('/chat');
    }
    else{
      navigate('/');
    }
  })
},[])

  return (
    <>
    <ToastContainer />
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/chat' element={<Chat/>} /> 
      <Route path='/profile' element={<ProfileUPdate/>} />
    </Routes>
    </>
  );
}

export default App;
