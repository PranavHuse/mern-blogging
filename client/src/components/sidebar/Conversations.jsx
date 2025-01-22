//STARTER CODE SNIPPET
import Conversation from "./Conversation";
import useGetConversations from "../../hooks/useGetConversations";
//import { conversationsAtom, selectedConversationAtom } from "../atoms/messagesAtom";
import { useState, useEffect } from "react";
const Conversations = () => {

	

	const { loadingConversations, conversations } = useGetConversations();
	//console.log(conversations);
//making changes removing use eff
	// useEffect(() => {
	// 	//setSelectedConversation(conversation);
        
	//   }, [conversations]);
	return (
		// <div className='py-2 flex flex-col overflow-auto'>
		// 	<Conversation />
		// 	<Conversation />
		// 	<Conversation />
		// 	<Conversation />
		// 	<Conversation />
		// 	<Conversation />
		// </div>
		<div className='py-2 flex flex-col overflow-auto'>
			{conversations.map((conversation, idx) => (
				<Conversation
					key={conversation._id}
					conversation={conversation}
					//emoji={getRandomEmoji()}
					lastIdx={idx === conversations.length - 1}
				/>
			))}

			{loadingConversations ? <span className='loading loading-spinner mx-auto'></span> : null}
		</div>
	);
};
export default Conversations;