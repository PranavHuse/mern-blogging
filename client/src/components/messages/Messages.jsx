// import React from 'react'

// export default function Messages() {
//     return (
// 		<div >
// 			<div className='chat-image avatar'>
// 				<div className='w-10 rounded-full'>
// 					<img alt='Tailwind CSS chat bubble component' />
// 				</div>
// 			</div>
// 			<div >message</div>me
// 			<div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>time</div>
// 		</div>
// 	);
// }
// STARTER CODE SNIPPET
import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
//import useMessages from "../zustand/useMessages";


import { useEffect, useRef } from "react";
const Messages = () => {
	const { messages, loading } = useGetMessages();
	const lastMessageRef = useRef();
	const prevMessagesLengthRef = useRef(messages.length);
   // const { messages, setMessages } = useMessages();
	useEffect(() => {
		// Scroll to bottom whenever messages change
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
		prevMessagesLengthRef.current = messages.length;
	}, [messages]);


	return (
		<div className='px-4 flex-1 overflow-auto'>
			{!loading && 
				Array.isArray(messages) && 
				messages.length > 0 &&
				messages.map((message) => (
					<div key={message._id} ref={lastMessageRef}>
						<Message message={message} />
					</div>
				))}

			{loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
			{!loading && messages.length === 0 && (
				<p className='text-center'>Send a message to start the conversation</p>
			)}
		</div>
	);
};
export default Messages;