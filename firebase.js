// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5b287MNVMJjRjN2IuP1wGAHCVkWphO4M",
  authDomain: "todoapp-e0316.firebaseapp.com",
  projectId: "todoapp-e0316",
  storageBucket: "todoapp-e0316.appspot.com",
  messagingSenderId: "591318467270",
  appId: "1:591318467270:web:e645038206226276b00dc7",
  measurementId: "G-14S1G2NK91",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

export { auth, db };

//591318467270-li0hm20probj1jj4d6fksimk06c1vio6.apps.googleusercontent.com
