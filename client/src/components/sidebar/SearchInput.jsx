
//STARTER CODE SNIPPET
import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
	return (
		<form className='flex items-center gap-1'>
			<input type='text' placeholder='Search…' className='input input-bordered rounded-full w-40' />
			<button type='submit' className='btn btn-circle bg-sky-500 text-white  w-8 rounded-full'>
				<IoSearchSharp className='w-4 h-4 outline-none' />
			</button>
		</form>
	);
};
export default SearchInput;