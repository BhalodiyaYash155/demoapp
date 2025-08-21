// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuE1e0hxiTKkf64WO3o2_NGOHmk6ySfwo",
  authDomain: "demoapp-23ce5.firebaseapp.com",
  projectId: "demoapp-23ce5",
  storageBucket: "demoapp-23ce5.firebasestorage.app",
  messagingSenderId: "1019354271494",
  appId: "1:1019354271494:web:c61f37a0d5b01bc6931887"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
