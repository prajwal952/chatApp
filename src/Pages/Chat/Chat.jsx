import React from 'react'
import './Chat.css'
import LeftSideBar from '../../Components/LeftSideBar/LeftSideBar'
import RightSideBar from '../../Components/RightSideBar/RightSideBar'
import ChatBox from '../../Components/ChatBox/ChatBox'
const Chat = () => {
  return (
    <div className='chat'>
            <div className="chat-container">
                <LeftSideBar/>
                <ChatBox/>
                <RightSideBar/>
            </div>
        </div>

   
  )
}

export default Chat