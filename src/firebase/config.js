// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByNtzCEDM6TVkCGoyLSq4t5LNvm1jU91M",
  authDomain: "react-curso-46921.firebaseapp.com",
  projectId: "react-curso-46921",
  storageBucket: "react-curso-46921.appspot.com",
  messagingSenderId: "946635497361",
  appId: "1:946635497361:web:e23d75adaa32f32b260430"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );