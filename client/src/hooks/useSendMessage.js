import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import useMessages from "../zustand/useMessages";

const useSendMessage = () => {
    const { currentUser } = useSelector((state) => state.user);
    const [loading, setLoading] = useState(false);
    const { messages, setMessages } = useMessages();
    const selectedConversation = useSelector((state) => state.selectedConversation.selectedConversation);
	const [isSending, setIsSending] = useState(false);
	const dispatch = useDispatch();
	const sendMessage = async (message) => {
		setIsSending(true);
       // console.log(message);
		try {
			const res = await fetch("http://localhost:3000/api/messages", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					message:message ,
					userId: currentUser._id,

					recipientId: selectedConversation.userId,
					//img: imgUrl,
				}),
			});
			const data = await res.json();
			if (data.error) {
				//showToast("Error", data.error, "error");
				console.log(data.error);
				return;
			}
		//	console.log(data);
			// setMessages((h) => {
			// 	// Only add if message isn't already present
			// 	const messageExists = prevMessages.some(msg => msg._id === data._id);
			// 	if (!messageExists) {
			// 		return [...prevMessages, data];
			// 	}
			// 	return prevMessages;
			// });
			setMessages([...messages, data]);

			dispatch({
				type: 'UPDATE_CONVERSATION',
				conversationId: selectedConversation._id,
				lastMessage: {
				  text: message,
				  sender: data.sender,
				},
			  });
			//setMessageText("");
			//setImgUrl("");
		} catch (error) {
			//showToast("Error", error.message, "error");
			console.log(error.message);
		} finally {
			setIsSending(false);
		}
	};

	return { sendMessage, loading };
};
export default useSendMessage;