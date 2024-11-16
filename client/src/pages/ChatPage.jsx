import React from 'react'
import Sidebar from '../components/sidebar/SideBar'
import MessageContainer from '../components/messages/MessageContainer'
export default function ChatPage() {
  return (
    <div  className='min-h-screen flex flex-col md:flex-row'>

      <div className='md:w-56'>
        <Sidebar/></div>
       <div className='flex justify-left md:w-11/12 p-4'>
         <MessageContainer />
       </div>
       
    </div>
  )
}
