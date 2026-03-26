// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnGx2pOzGThk5rE2pL4vopirohPSZJdbk",
  authDomain: "site-plugwin.firebaseapp.com",
  projectId: "site-plugwin",
  storageBucket: "site-plugwin.firebasestorage.app",
  messagingSenderId: "417720166452",
  appId: "1:417720166452:web:606c21946e5ece9b7ac261"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
