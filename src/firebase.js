// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIdX_pUvWUA9-FNaXVqNLw1OnPxbf7iRw",
  authDomain: "elpatiopizzeria-868b2.firebaseapp.com",
  projectId: "elpatiopizzeria-868b2",
  storageBucket: "elpatiopizzeria-868b2.appspot.com",
  messagingSenderId: "396217290433",
  appId: "1:396217290433:web:7406beeccf011efa2cce40",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
