// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
import {getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCieQtngaxLuJpVtfPyh6ITNMld09j76_c",
  authDomain: "multifarious-e9293.firebaseapp.com",
  projectId: "multifarious-e9293",
  storageBucket: "multifarious-e9293.appspot.com",
  messagingSenderId: "928706160882",
  appId: "1:928706160882:web:8615df144d3525c17d486b",
  measurementId: "G-H1QG4N63JY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);