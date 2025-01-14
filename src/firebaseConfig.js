// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuBQubDGyjayZdlPGHFFlLcP0pnPCw-M0",
  authDomain: "white-database.firebaseapp.com",
  projectId: "white-database",
  storageBucket: "white-database.appspot.com",
  messagingSenderId: "1006365071639",
  appId: "1:1006365071639:web:ef0516ae5ee3b2fce6bf52",
  measurementId: "G-81MK07B7TH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
