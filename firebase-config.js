// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  TwitterAuthProvider,
  PhoneAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCmgfoeSNtueJTfAbV3PyOkj-5iklZtPjo",
  authDomain: "graphics-printing-ordering-app.firebaseapp.com",
  projectId: "graphics-printing-ordering-app",
  storageBucket: "graphics-printing-ordering-app.appspot.com",
  messagingSenderId: "740900421404",
  appId: "1:740900421404:web:03ec1ccc58e80676be44d9",
  measurementId: "G-W8PG93CXLH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const twitterProvider = new TwitterAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
export const phoneProvider = new PhoneAuthProvider();
