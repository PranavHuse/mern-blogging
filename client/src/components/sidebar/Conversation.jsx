import { useState, useEffect } from "react";
import MessageContainer from "../messages/MessageContainer";
import { useRecoilState, useRecoilValue } from "recoil";
//import {selectedConversationAtom} from "../../atoms/messagesAtom";
import React from 'react';
import PropTypes from 'prop-types';


import { useDispatch, useSelector } from 'react-redux';
// STARTER CODE SNIPPET
// eslint-disable-next-line react/prop-types
const Conversation = ({ conversation, lastIdx }) => {
	const selectedConversation = useSelector((state) => state.selectedConversation.selectedConversation);
     const dispatch = useDispatch();
	//const [ user, setUser ] = useState(conversation.participants[0]);
	
	//console.log(conversation);
	//setConvo(conversation);
	//console.log(selectedConversation);
	 const user =  conversation.participants[0] ;
	//const user = convo.participants[0];
	//console.log(user);
	//const [selectedConversation, setSelectedConversation] = useRecoilState(selectedConversationAtom);
	
	const isSelected = selectedConversation?._id === conversation._id;
	const lastMessage = conversation.lastMessage;
    const [profilePic, setProfilePic] = useState(null);
	
	useEffect(() => {

	const getUser = async () => {
		try {
			//console.log(user._id);
		  const res = await fetch(`/api/user/${user._id}`);
		  const data = await res.json();
		  //console.log(data.profilePicture);
		  const pp = data.profilePicture;
		  //console.log(pp);
		  if (res.ok) {
			setProfilePic(pp);
			//console.log(profilePic);
		  }
		} catch (error) {
		  console.log(error.message);
		}
	  };
	  getUser();
	},[profilePic]);


  

	useEffect(() => {
		
       //  console.log(conversation);
	  }, [conversation]);

	return (
		<>
			<div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
				${isSelected ? "bg-sky-500" : ""}
			`}
			onClick={() =>{ 

				dispatch({
					 type: 'SET_SELECTED_CONVERSATION',
					selectedConversation: {
						_id: conversation._id,
						userId: user._id,
						userProfilePic: profilePic,
						username: user.username,
						
					}
					
				// setSelectedConversation({
				// 	_id: conversation._id,
				// 	userId: user._id,
				// 	userProfilePic: profilePic,
				// 	username: user.username,
					
					//mock: conversation.mock,
				})
				//console.log('Selected conversation:', selectedConversation);
			}
				
			}

			
			>
				
				<div className='avatar online'>
					<div className='w-8 rounded-full'>
						<img
							src={profilePic}
							alt='user avatar'
						/>
					</div>
				</div>

				<div className='flex flex-col flex-1'>
					<div className='flex gap-2 justify-between'>
						<p className='font-bold text-gray-200'> {user.username} </p>
						<span className='text-sm'>🎃</span>
					</div>
				</div>
			</div>

			{!lastIdx && <div className='divider my-0 py-0 h-1' />}
			<div style={{ display: 'none' }}>
			{/* {selectedConversation && (
             // <MessageContainer conversation={selectedConversation} />
)} */}
			</div>
					</>
	);
};
export default Conversation;

// Conversation.propTypes = {
// 	conversation: PropTypes.shape({
// 	  participants: PropTypes.arrayOf(
// 		PropTypes.shape({
// 		  username: PropTypes.string.isRequired,
// 		  _id: PropTypes.string.isRequired,
// 		}),
// 	  ).isRequired,
// 	}).isRequired,
//   };