// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDvU_GiCh2YDe75yFknNtuOcONHZS7rHXA",
  authDomain: "realtor-react-clone-ec7d1.firebaseapp.com",
  projectId: "realtor-react-clone-ec7d1",
  storageBucket: "realtor-react-clone-ec7d1.appspot.com",
  messagingSenderId: "3057740805",
  appId: "1:3057740805:web:931470587f7ceb5bcd006c",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
