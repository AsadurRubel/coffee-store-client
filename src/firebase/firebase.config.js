// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAURRvQaryGrCUYcPPviOaLOxburR3au_k",
  authDomain: "coffee-store-47a1a.firebaseapp.com",
  projectId: "coffee-store-47a1a",
  storageBucket: "coffee-store-47a1a.appspot.com",
  messagingSenderId: "1904204611",
  appId: "1:1904204611:web:bb180e9b1e3ce0183c2df6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;