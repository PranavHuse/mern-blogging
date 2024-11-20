import React from 'react'
import Sidebar from '../components/sidebar/SideBar'
import MessageContainer from '../components/messages/MessageContainer'
import { useEffect, useState } from "react";
import { Alert, Button, FileInput, Select, TextInput } from 'flowbite-react';
import { useSelector } from 'react-redux';
export default function ChatPage() {
  const { currentUser } = useSelector((state) => state.user);
   const userId = currentUser._id; // userId


  const [loadingConversations, setLoadingConversations] = useState(true);
  const [conversations, setConversations] = useState([]);
  const [getConversationError, setGetConversationError] = useState(null);



  useEffect(() => {
		const getConversations = async () => {
			try {
        setLoadingConversations(true);
        //console.log(currentUser._id);
				const res = await fetch('/api/messages/conversations', {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          // body: JSON.stringify({ 
          //   userId: currentUser._id,
          // }),
        });
				const data = await res.json();
       // console.log(data);
				if (data.error) {
					//showToast("Error", data.error, "error");
            setGetConversationError (data.error);

					return;
				}
				// console.log(data);
				setConversations(data);
			} catch (error) {
				//showToast("Error", error.message, "error");
        setGetConversationError (error.message);
			} finally {
				setLoadingConversations(false);
			}
		};

		getConversations();
	}, [ setConversations]);


  return (
    <div  className='min-h-screen flex flex-col md:flex-row'>

      <div className='md:w-56'>
        <Sidebar/></div>
       <div className='flex justify-left md:w-11/12 p-4'>
         <MessageContainer />
       </div>
       {getConversationError && (
          <Alert className='mt-5' color='failure'>
            {getConversationError}
          </Alert>
        )}
    </div>
  )
}
