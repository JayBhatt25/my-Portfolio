// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAU6wBsAxU-s2kwgsu5eXRtSPj6K1-fUoQ",
  authDomain: "jay-bhatt-portfolio.firebaseapp.com",
  projectId: "jay-bhatt-portfolio",
  storageBucket: "jay-bhatt-portfolio.appspot.com",
  messagingSenderId: "414347367987",
  appId: "1:414347367987:web:63d8d95c64e9126e31f546",
  measurementId: "G-3TBKLYRGF4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);