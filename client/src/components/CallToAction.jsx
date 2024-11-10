import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Want to Know More
            </h2>
            <p className='text-gray-500 my-2'>
                Checkout My Github 
            </p>
            <Button  className='rounded-tl-xl rounded-bl-none'>
                <a href="https://github.com/PranavHuse" target='_blank' rel='noopener noreferrer'>
                PranavHuse
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bleepstatic.com%2Fcontent%2Fhl-images%2F2021%2F05%2F10%2FGitHub-headpic.jpg&f=1&nofb=1&ipt=dba527600ad175ff7daa1925d846838e40bc740ebd2f7cf9a50f9266fdb505a6&ipo=images" />
        </div>
    </div>
  )
}