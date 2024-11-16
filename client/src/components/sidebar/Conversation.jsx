// STARTER CODE SNIPPET
const Conversation = () => {
	return (
		<>
			<div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer w-64'>
				<div className='avatar online'>
					<div className='w-8 rounded-full'>
						<img
							src='https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png'
							alt='user avatar'
						/>
					</div>
				</div>

				<div className='flex flex-col flex-1'>
					<div className='flex gap-2 justify-between'>
						<p className='font-bold text-gray-200'>John Doe</p>
						<span className='text-sm'>🎃</span>
					</div>
				</div>
			</div>

			<div className='divider my-0 py-0 h-0.5' />
		</>
	);
};
export default Conversation;