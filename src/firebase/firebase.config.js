// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmy7HTkHwKONm0ILLhXIUGjCrfMSu4gVM",
  authDomain: "user-email-password-auth-2c304.firebaseapp.com",
  projectId: "user-email-password-auth-2c304",
  storageBucket: "user-email-password-auth-2c304.firebasestorage.app",
  messagingSenderId: "286048043800",
  appId: "1:286048043800:web:01d1b172fd3a80716a946d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;