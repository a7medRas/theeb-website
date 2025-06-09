
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDytNOQTjw4oMnkkcwY428q3cFI-toG1bc",
  authDomain: "theeb-website.firebaseapp.com",
  projectId: "theeb-website",
  storageBucket: "theeb-website.firebasestorage.app",
  messagingSenderId: "721301424560",
  appId: "1:721301424560:web:c8895d2d4329ef212aee75",
  measurementId: "G-BX5XQSC9WG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { db, storage, auth };
