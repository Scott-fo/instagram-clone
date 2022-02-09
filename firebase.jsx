// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLC79O_WZDYl8IsRjB0kItYylFH1GYuu0",
  authDomain: "insta-2-1dab1.firebaseapp.com",
  projectId: "insta-2-1dab1",
  storageBucket: "insta-2-1dab1.appspot.com",
  messagingSenderId: "379494140559",
  appId: "1:379494140559:web:d0623045f4f1ddc8fabefa",
  measurementId: "G-CY7YQC4L9Q"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
