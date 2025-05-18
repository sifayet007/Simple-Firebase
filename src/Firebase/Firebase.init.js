// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDw3Zjw2QGBt7VxNIXL0Rwr84BRTB2nHWA",
  authDomain: "simple-firebase2-85192.firebaseapp.com",
  projectId: "simple-firebase2-85192",
  storageBucket: "simple-firebase2-85192.firebasestorage.app",
  messagingSenderId: "624616420175",
  appId: "1:624616420175:web:fc6f7d285c918c68934b3a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
