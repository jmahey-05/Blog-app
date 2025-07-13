// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-353cc.firebaseapp.com",
  projectId: "mern-blog-353cc",
  storageBucket: "mern-blog-353cc.appspot.com",
  messagingSenderId: "948500969750",
  appId: "1:948500969750:web:7f51903d29612c057eb837"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);