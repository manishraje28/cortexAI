// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "cortexai-e75c0.firebaseapp.com",
  projectId: "cortexai-e75c0",
  storageBucket: "cortexai-e75c0.firebasestorage.app",
  messagingSenderId: "739153496795",
  appId: "1:739153496795:web:8b11cf8c88dfe2972d1afe",
  measurementId: "G-W8Q7H6BXNM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
// eslint-disable-next-line no-undef
export const googleProvider = new GoogleAuthProvider();
