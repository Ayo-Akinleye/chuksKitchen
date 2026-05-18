// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
import { getFirestore } from "firebase/firestore";

// CONFIG FILE FROM FIREBASE CONSOLE

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuPEosrbBYOz0lVJeM6z7gLjQEaMjXDEA",
  authDomain: "chukskitchen-af81e.firebaseapp.com",
  projectId: "chukskitchen-af81e",
  storageBucket: "chukskitchen-af81e.firebasestorage.app",
  messagingSenderId: "395172179392",
  appId: "1:395172179392:web:8fb64f531d757c825cac25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)
export const googleProvidder = new GoogleAuthProvider();