// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_APP_ID,
  apiKey: "AIzaSyAZtiTpF-P1P6ynmwfDH1fhEcoRgyCpId4",
  authDomain: "college-mate-b9ac7.firebaseapp.com",
  projectId: "college-mate-b9ac7",
  storageBucket: "college-mate-b9ac7.appspot.com",
  messagingSenderId: "410830935628",
  appId: "1:410830935628:web:465fe2a439c7972fa8c6e9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
