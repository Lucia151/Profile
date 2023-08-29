// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore/lite"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAT_HWRT8szdDualAhOfneWlAXcCFTtBU8",
  authDomain: "portfolio-28a92.firebaseapp.com",
  projectId: "portfolio-28a92",
  storageBucket: "portfolio-28a92.appspot.com",
  messagingSenderId: "805241535098",
  appId: "1:805241535098:web:eb8915c8162abd63ca99c3",
  measurementId: "G-EF5F6FWG4D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);