import { useDispatch, useSelector } from 'react-redux';
//import { extractTime } from "../../utils/extractTime";
import moment from 'moment';
import { useEffect, useRef } from "react";
const Message = ({ message }) => {
  
 // console.log(message);
  const { currentUser } = useSelector((state) => state.user);
 // console.log(currentUser);
  const selectedConversation = useSelector((state) => state.selectedConversation.selectedConversation);
	const fromMe = message.sender === currentUser._id;
	//const formattedTime = extractTime(message.createdAt);
  const formattedTime =  moment(message.createdAt).fromNow()
	const chatClassName = fromMe ? "chat-end" : "chat-start";
	const profilePic = fromMe ? currentUser.profilePicture  : selectedConversation?.userProfilePic;
	const bubbleBgColor = fromMe ? "bg-blue-500" : "";
	//const shakeClass = message.shouldShake ? "shake" : "";


  useEffect(() => {
		//console.log("message changed");
	
	}, [message]);

  return (
		<div className={`chat ${chatClassName}`}>
			<div className='chat-image avatar'>
				<div className='w-10 rounded-full'>
					<img alt='Tailwind CSS chat bubble component' src={profilePic} />
				</div>
			</div>
			<div className={`chat-bubble text-black ${bubbleBgColor} pb-2`}>{message.text}</div>
			<div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{formattedTime}</div>
		</div>
	);
};
export default Message;