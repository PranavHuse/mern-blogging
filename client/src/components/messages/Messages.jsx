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

const Messages = () => {
	return (
		<div className='px-4 flex-1 overflow-auto max-h-screen'>
			<Message />
			<Message />
			<Message />
			<Message />
			<Message />
			<Message />
			<Message />
			<Message />
			<Message />
			<Message />
			<Message />
			<Message />

			
		</div>
	);
};
export default Messages;