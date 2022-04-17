// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDndFeT3CSdVlZF900oH9HmVc0UTg33kfY",
  authDomain: "touraholic-4138d.firebaseapp.com",
  projectId: "touraholic-4138d",
  storageBucket: "touraholic-4138d.appspot.com",
  messagingSenderId: "728312282718",
  appId: "1:728312282718:web:a2f9eceb9378af2dd0fecf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;