import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCmG8od9p6tFoGRPRhsCEoquFw59ZaeoSM",
  authDomain: "shanu-1e90f.firebaseapp.com",
  projectId: "shanu-1e90f",
  storageBucket: "shanu-1e90f.appspot.com",
  messagingSenderId: "722436027088",
  appId: "1:722436027088:web:4b4f51b4daed0433f0a4d5",
  measurementId: "G-KETFTSL106"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)