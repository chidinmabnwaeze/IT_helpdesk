import React from 'react'
import aiBot from '../assets/icons/bx_bot.svg'

const Chatbot = () => {
  return (
    <div className='chatbot w-3/5 flex flex-col justify-between bg-white border m-auto '>
       <div className='header'>
        <div className="left flex m-2">
            <img src={aiBot} alt="" />
            <div>
                <h1>IT SUPPORT</h1>
                <p>Chatbot</p>
            </div>
        </div>
        <hr />
        </div> 
        <div className="chatarea">

        </div>
        <div className="textSpace">
            <img src="" alt="" />
            <img src="" alt="" />
            <input type="text" placeholder='Type your message here'/>
            <img src="" alt="" />
            <img src="" alt="" />
        </div>
    </div>
  )
}

export default Chatbot