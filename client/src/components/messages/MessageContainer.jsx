// //STARTER CODE SNIPPET
// import MessageInput from "./MessageInput";
// import Messages from "./Messages";

// const MessageContainer = () => {
// 	return (
// 		<div className='md:min-w-[450px] flex flex-col'>
// 			<>
// 				{/* Header */}
// 				<div className='bg-slate-500 px-4 py-2 mb-2'>
// 					<span className='label-text'>To:</span> <span className='text-gray-900 font-bold'>John doe</span>
// 				</div>

// 				<Messages />
// 				<MessageInput />
// 			</>
// 		</div>
// 	);
// };
// export default MessageContainer;

//structure of selectedConversation(conversation)\----
// setSelectedConversation({
// 	_id: conversation._id,
// 	userId: user._id,
// 	userProfilePic: profilePic,
// 	username: user.username,
import { useState, useEffect } from "react";
//import { useRecoilValue, useSetRecoilState } from "recoil";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
//import { useState, useEffect } from 'react';
import { TiMessages } from "react-icons/ti";
import { useSelector } from 'react-redux';
//import {selectedConversationAtom} from "../../atoms/messagesAtom";
import useGetMessages from "../../hooks/useGetMessages";
import useMessages from "../../zustand/useMessages";

const MessageContainer = ({conversation}) => {
   //console.log("conversation",conversation);
//    const selectedConversation = useRecoilValue(selectedConversationAtom);
//    const setselectedConversation = useSetRecoilState(selectedConversationAtom);
const selectedConversation = useSelector((state) => state.selectedConversation.selectedConversation);
   //const [messages, setMessages] = useState([]);
   const [loadingMessages, setLoadingMessages] = useState(false);
	//const username=conversation.username;
    const { currentUser } = useSelector((state) => state.user);
	const { messages, setMessages } = useMessages();


	//const { messages, loading } = useGetMessages();
	//const [selectedConversation, setSelectedConversation] = useState(conversation);

   // console.log(currentUser);
	//const user = conversation.participants[0];
	//const [selectedConversation, setSelectedConversation] = useState(null);

    

	// useEffect(() => {
		
        
	//   }, [selectedConversation]);
	  useEffect(() => {
		//setSelectedConversation(conversation);
        
	  }, [conversation]);
	
	// useEffect(() => {
	// 	//console.log(selectedConversation);
	//   }, []);
       
	// useEffect(() => {
	// 	// cleanup function (unmounts)
	// 	return () => setSelectedConversation(null);
	// }, []);


	useEffect(() => {
		if (!selectedConversation) return;
		
		setLoadingMessages(true);
		setMessages([]);
		
		const getMessages = async () => {
			try {
				if (selectedConversation.mock) return;
				
				const res = await fetch(`/api/messages/${selectedConversation.userId}`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
					}
				});
				
				if (!res.ok) {
					throw new Error(`HTTP error! status: ${res.status}`);
				}
				
				const data = await res.json();
				if (data.error) throw new Error(data.error);
				
				setMessages(data);
			} catch (error) {
				console.error("Failed to fetch messages:", error);
				setMessages([]);
			} finally {
				setLoadingMessages(false);
			}
		};

		getMessages();
	}, [selectedConversation?.userId]);  //selectedConversation_id,currentUser_id
	  const NoChatSelected = () => {
		//const { authUser } = useAuthContext();
		return (
			<div className='flex items-center justify-center w-full h-full'>
				<div className='px-4 text-center sm:text-lg md:text-xl text-black
				-200 font-semibold flex flex-col items-center gap-2'>
					<p>Welcome 👋❄</p>
					<p>Select a chat to start messaging</p>
					<TiMessages className='text-3xl md:text-6xl text-center' />
				</div>
			</div>
		);
	};
	

	

 
	

	return (
		<div className='md:min-w-[450px] flex flex-col  h-[calc(100vh-164px)]'>
	


	{!selectedConversation ? (
 	<NoChatSelected />
		): (

			<>
			{/* Header */}
		   <div className='bg-slate-500 px-4 py-2 mb-2'>
			<span className='label-text'>To:</span> <span className='text-gray-900 font-bold'>{selectedConversation.username}</span>
		   </div>

		<Messages />
	   <MessageInput />
	   </>
 )}
			
		</div>
		
	);
};
export default MessageContainer;