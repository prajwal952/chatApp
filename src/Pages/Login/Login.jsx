import React,{useState} from 'react'
import './Login.css'
import assets from '../../assets/assets'
import {signup,login} from '../../Config/firebase'


const Login = () => {
const[currentState, setCurrentState] = useState('Sign up')

const [username, setUsername] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');


const onSubmitHandler=(event)=>{
  event.preventDefault()
  if(currentState=='Sign up'){
    signup(username,email,password)
  }
  else{
    login(email,password)
  }
}

  return (
    <div className='login'>
        <img src={assets.logo_big} alt="" className='logo'/>

        <form className="login-form" onSubmit={onSubmitHandler}>
                <h2>{currentState}</h2>
              {currentState=='Sign up'? 
               <input type="text" onChange={(event)=>{setUsername(event.target.value)}} value={username} placeholder='username' required className="form-input" /> :''}
                <input type="email"  onChange={(event)=>{setEmail(event.target.value)}} value={email} placeholder='Email address' required className="form-input" />
                <input type="password" onChange={(event)=>{setPassword(event.target.value)}} value={password} placeholder='Password' required className="form-input" />
                <button type='submit'>{currentState=='Sign up' ? "Create account" :"Login Now"}</button>

                <div className="login-term">
                    <input type="checkbox" name="" id="" />
                    <p> Agree teams and conditions <sup>*</sup></p>
                </div>

                <div className="login-forgot">
                    <p className='login-toggel'>
                       { currentState==='Sign up'? "Already have an account":'Create a new account'}
                         <span onClick={()=>{
                           currentState==='Sign up'? setCurrentState('Login'): setCurrentState('Sign up')
                        }}> click here</span>
                    </p>
                </div>
        </form>

    </div>
  )
}

export default Login