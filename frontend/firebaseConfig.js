// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJg5JN8RYbwTarhV54YM63KqsQzUZY1qY",
  authDomain: "cloudsso-45ac5.firebaseapp.com",
  projectId: "cloudsso-45ac5",
  storageBucket: "cloudsso-45ac5.appspot.com",
  messagingSenderId: "186956038952",
  appId: "1:186956038952:web:9bb77c46f7dc4cac6d061d",
  measurementId: "G-QC9M9G8P3V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export { app, auth };