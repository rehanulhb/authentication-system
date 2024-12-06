// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVaG-7z_o3yzAhlVVDDgRJJ63qSbfKJrM",
  authDomain: "authentication-project-a5799.firebaseapp.com",
  projectId: "authentication-project-a5799",
  storageBucket: "authentication-project-a5799.firebasestorage.app",
  messagingSenderId: "731841260956",
  appId: "1:731841260956:web:e28c5182219a5bd1f0ac59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;