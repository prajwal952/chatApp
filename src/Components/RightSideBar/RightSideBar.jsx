import React from 'react'
import './RightSideBar.css'
import assets from '../../assets/assets'
import { logout } from '../../Config/firebase'

const RightSideBar = () => {
  return (
    <div className='rs'>
        <div className="rs-profile">
            <img src={assets.profile_img} alt="" />
            <h3>Rakesh Modi
                <img src={assets.green_dot}  alt="" className='dot'/>
            </h3>
            <p>Hey, There i am Rakesk using chat app</p>
        </div>
        <hr />
        <div className="rs-media">
            <p>Media</p>
            <div>
                <img src={assets.pic1} alt="" />
                <img src={assets.pic2} alt="" />
                <img src={assets.pic3} alt="" />
                <img src={assets.pic4} alt="" />
                <img src={assets.pic1} alt="" />
                <img src={assets.pic2} alt="" />
            </div>
            <button onClick={()=>{
                logout()
            }}>Log Out</button>
        </div>
    </div>
  )
}

export default RightSideBar