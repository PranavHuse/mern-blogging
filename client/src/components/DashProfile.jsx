import React from 'react'
import { Alert, Button, Modal, ModalBody, TextInput } from 'flowbite-react';

import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { useDispatch } from 'react-redux';
//import { cloudinary } from "cloudinary";
//import { Cloudinary } from '@cloudinary/url-gen';


export default function DashProfile() {
  const { currentUser, error, loading } = useSelector((state) => state.user);
  const [imageFile, setImageFile] = useState(null);
  const [imageFileUrl, setImageFileUrl] = useState(null);
  const [imageFileUploadProgress, setImageFileUploadProgress] = useState(null);
  const [imageFileUploadError, setImageFileUploadError] = useState(null);
  const [imageFileUploading, setImageFileUploading] = useState(false);
  
  const filePickerRef = useRef();
  const dispatch = useDispatch();
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImageFileUrl(URL.createObjectURL(file));
     // console.log(imageFileUrl)
    }
  };
  useEffect(() => {
    //console.log(import.meta.env.VITE_CLOUDINARY_CLOUD_NAME)
    if (imageFile) {
      uploadImage();
    }
  }, [imageFile]);
 
 
  const uploadImage = async () => {
    setImageFileUploading(true);
    setImageFileUploadError(null)
    if (imageFile) {       
      // const uploadedResponse = await cloudinary.uploader.upload(imageFile);
	   	// setImageFileUrl(uploadedResponse.secure_url); 
      // console.log(imageFileUrl);
          const data= new FormData();;
          data.append('file', imageFile);
          data.append('upload_preset', 'firstpreset');
          data.append('cloud_name', import.meta.env.VITE_CLOUDINARY_CLOUD_NAME);
         const res= await fetch( 'https://api.cloudinary.com/v1_1/' + import.meta.env.VITE_CLOUDINARY_CLOUD_NAME + '/upload',
           {
            method: 'POST',
            body: data,
           }
         );
         const imgurl=await res.json();
        // console.log(imgurl.secure_url);
         setImageFileUrl(imgurl.secure_url);
    }
     //" https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/upload"
     

  


  }
 
 
 

 
 
  return (
    <div className='max-w-lg mx-auto p-3 w-full'>
    <h1 className='my-7 text-center font-semibold text-3xl'>Profile</h1>
    <form  className='flex flex-col gap-4'>
    {/* <div> */}
       <input
          type='file'
          accept='image/*'
          onChange={handleImageChange}
          ref={filePickerRef}
          //hidden
        />
        <div
          className='relative w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full'
          onClick={() => filePickerRef.current.click()}
        >
          {imageFileUploadProgress && (
            <CircularProgressbar
              value={imageFileUploadProgress || 0}
              text={`${imageFileUploadProgress}%`}
              strokeWidth={5}
              styles={{
                root: {
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                },
                path: {
                  stroke: `rgba(62, 152, 199, ${
                    imageFileUploadProgress / 100
                  })`,
                },
              }}
            />
          )}
       <img
            src={imageFileUrl ||currentUser.profilePicture}
            alt='user'
            className={`rounded-full w-full h-full object-cover border-8 border-[lightgray] 
              imageFileUploadProgress &&
              imageFileUploadProgress < 100 &&
              'opacity-60'
            `}
          />
       </div>

       <TextInput
          type='text'
          id='username'
          placeholder='username'
          defaultValue={currentUser.username}
          //onChange={handleChange}
        />
        <TextInput
          type='email'
          id='email'
          placeholder='email'
          defaultValue={currentUser.email}
         // onChange={handleChange}
        />
        <TextInput
          type='password'
          id='password'
          placeholder='password'
          //onChange={handleChange}
        />
        <Button
          type='submit'
          //gradientDuoTone='purpleToBlue'
          outline
          //disabled={loading || imageFileUploading}
        >
          {loading ? 'Loading...' : 'Update'}
        </Button>

      </form>
      <div className='text-red-500 flex justify-between mt-5'>
        <span className='cursor-pointer'>
          Delete Account
        </span>
        <span  className='cursor-pointer'>
          Sign Out
        </span>
      </div>
      </div>
   
  )
}
