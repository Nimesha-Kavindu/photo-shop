// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCn6Jz3eRXzuCogL26FnJsodHWVfar5-sY",
  authDomain: "blogging-website-ced56.firebaseapp.com",
  projectId: "blogging-website-ced56",
  storageBucket: "blogging-website-ced56.appspot.com",
  messagingSenderId: "253540812906",
  appId: "1:253540812906:web:d0a35e12c106669f24a213",
  measurementId: "G-NQHPRL8ZGR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Optionally export app and analytics if you want to use them in other modules
export { app, analytics };

let db = firebase.firestore();