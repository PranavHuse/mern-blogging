
//STARTER CODE SNIPPET
import { IoSearchSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import useGetConversations from "../../hooks/useGetConversations";
const SearchInput = () => {
	const [searchingUser, setSearchingUser] = useState(false);
	const [searchText, setSearchText] = useState("");
	const { currentUser } = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const { loadingConversations, conversations } = useGetConversations();






	const handleConversationSearch = async (e) => {
		e.preventDefault();
		setSearchingUser(true);
		try {
			const res = await fetch(`/api/user/profile/${searchText}`);
			const searchedUser = await res.json();
			if (searchedUser.error) {
				//showToast("Error", searchedUser.error, "error");
				console.log(searchedUser.error);
				return;
			}

			const messagingYourself = searchedUser._id === currentUser._id;
			if (messagingYourself) {
				console.log( "You cannot message yourself");
				return;
			}
			const conversationAlreadyExists = conversations.find(
				(conversation) => conversation.participants[0]._id === searchedUser._id
			);

			
			if (conversationAlreadyExists) {
				dispatch({
					type: 'SET_SELECTED_CONVERSATION',
				   selectedConversation: {
					   _id: conversationAlreadyExists._id,
					   userId: searchedUser._id,
					   userProfilePic: searchedUser.profilePic,
					   username: searchedUser.username,
					   
				   }})
				   
				return;
			}else{ 

				dispatch({
					type: 'SET_SELECTED_CONVERSATION',
				   selectedConversation: {
					   _id:"" ,
					   userId: searchedUser._id,
					   userProfilePic: searchedUser.profilePic,
					   username: searchedUser.username,
					   
				   }})
				  
			}
		
		} catch (error) {
			//showToast("Error", error.message, "error");
			console.log(error.message);
		} finally {
			setSearchingUser(false);
		}
	};











	return (
		<form className='flex items-center gap-1'>
			<input type='text' placeholder='Search…' className='input input-bordered rounded-full w-40' onChange={(e) => setSearchText(e.target.value)} />
			<button type='submit' className='btn btn-circle bg-sky-500 text-white  w-8 rounded-full' onClick={handleConversationSearch} >
				<IoSearchSharp className='w-4 h-4 outline-none' />
			</button>
		</form>
	);
};
export default SearchInput;