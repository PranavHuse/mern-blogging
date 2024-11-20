import { useEffect, useState } from "react";
import useMessages from "../zustand/useMessages";
//import toast from "react-hot-toast";
import { useDispatch, useSelector } from 'react-redux';
const useGetMessages = () => {
	const [loading, setLoading] = useState(false);
    const { messages, setMessages } = useMessages();
    const [error, setError] = useState(null);
    const selectedConversation = useSelector((state) => state.selectedConversation.selectedConversation);
    const { currentUser } = useSelector((state) => state.user);
	useEffect(() => {
		const getMessages = async () => {
			if (!selectedConversation?.userId) return;
			
			
			
			setLoading(true);
			try {
				const res = await fetch(`/api/messages/${selectedConversation.userId}`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
					},
				});
				
				if (!res.ok) {
					throw new Error(`HTTP error! status: ${res.status}`);
				}
				
				const data = await res.json();
				if (data.error) throw new Error(data.error);
				//setMessages(Array.isArray(data) ? data : []);
				setMessages(data);
			} catch (error) {
				console.error("Failed to fetch messages:", error);
				setMessages([]);
			} finally {
				setLoading(false);
			}
		};

		if (selectedConversation?._id) getMessages();
	}, [selectedConversation?._id, setMessages]);



	useEffect(() => {
		//console.log(messages);
	}, [messages]);

	return { messages, loading };
};



export default useGetMessages;