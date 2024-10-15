// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:  import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "bloggingapp-2604c.firebaseapp.com",
  projectId: "bloggingapp-2604c",
  storageBucket: "bloggingapp-2604c.appspot.com",
  messagingSenderId: "1024150363421",
  appId: "1:1024150363421:web:fb9e9afd8c3b2ca30115f4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);