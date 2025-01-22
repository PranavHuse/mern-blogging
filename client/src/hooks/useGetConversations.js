import { useEffect, useState ,useMemo } from "react";
import { useSelector } from 'react-redux';
import useMessages from "../zustand/useMessages";

const useGetConversations = () => {
    const { currentUser } = useSelector((state) => state.user);
   // const userId = currentUser._id; // userId
   const userId = useMemo(() => currentUser?._id, [currentUser]);
 
   const [loadingConversations, setLoadingConversations] = useState(true);
   const [conversations, setConversations] = useState([]);
   const [getConversationError, setGetConversationError] = useState(null);
   const { messages, setMessages } = useMessages();
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
          //   // userId: currentUser._id,
          //   userId: userId,

          // }),
        });
				const data = await res.json();
        //console.log(data);
				if (data.error) {
					//showToast("Error", data.error, "error");
            setGetConversationError (data.error);

					return;
				}
				//console.log(data);
				setConversations(data);
			} catch (error) {
				//showToast("Error", error.message, "error");
        setGetConversationError (error.message);
			} finally {
				setLoadingConversations(false);
			}
		};

		getConversations();
	}, [userId, messages]);



	return { loadingConversations, conversations };
};
export default useGetConversations;