import React,{useState} from 'react'
import './Login.css'
import assets from '../../assets/assets'


const Login = () => {
const[currentState, setCurrentState] = useState('Sign up')


  return (
    <div className='login'>
        <img src={assets.logo_big} alt="" className='logo'/>

        <form className="login-form">
                <h2>{currentState}</h2>
              {currentState=='Sign up'?  <input type="text" placeholder='username' required className="form-input" /> :''}
                <input type="email"  placeholder='Email address' required className="form-input" />
                <input type="password" placeholder='Password' required className="form-input" />
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