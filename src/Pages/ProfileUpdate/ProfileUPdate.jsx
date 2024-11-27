import React from 'react'
import './PorfileUpdate.css'
import assets from '../../assets/assets'

const ProfileUPdate = () => {
  return (
    <div className='profile'>
        <div className="profile-container">
            <form >
                <h3>Profile Details</h3>
                <label htmlFor="avatar">
                    <input type="file" id='avatar' accept='.png, .jpg, .jpeg ' hidden/>
                    <img src={assets.avatar_icon} alt="" />
                    upload profile image
                </label>

                <input type="text" placeholder='your name' required name="" id="" />
                <textarea placeholder='write profile bio' required></textarea>
                <button type='submit'>Save</button>

            </form>
            <img className='profile-pic' src={assets.logo_icon} alt="" />
        </div>
    </div>
  )
}

export default ProfileUPdate