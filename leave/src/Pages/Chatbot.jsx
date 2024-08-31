import React from 'react'
import aiBot from '../assets/icons/bx_bot.svg'
import { FaCamera, FaMicrophone, FaRegSmile, FaSmile } from 'react-icons/fa'
import send from '../assets/icons/send.svg'
import mic from '../assets/icons/mic-01.svg'
import {TiCameraOutline}  from 'react-icons/ti'

const Chatbot = () => {
  return (
    <div className='chatbot w-3/5 flex flex-col justify-between h-screen bg-white border m-auto '>
       <div className='header'>
        <div className="left flex m-2">
            <img src={aiBot} alt="" />
            <div className='ml-2'>
                <h1>IT SUPPORT</h1>
                <p className='text-gray-400'>Chatbot</p>
            </div>
        </div>
        <hr />
        </div> 
        <div className="chatarea">

        </div>
        <div className="textSpace flex items-center m-3">
            <TiCameraOutline size={28} color='grey' className='m-2'/>
            <FaRegSmile size={22} color='#9E9E9E' className='m-2'/>
            <input type="text" placeholder='Type your message here' className='w-full h-10'/>
            <img src={mic} alt=""className='m-2' />
            <img src={send} alt="" />
        </div>
    </div>
  )
}

export default Chatbot