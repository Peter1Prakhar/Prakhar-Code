import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getApp, getApps } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyALaYwsOhbQ2KOtg6pEOq7nCiEc-G0lzSo",
  authDomain: "leetcode-clone-7187b.firebaseapp.com",
  projectId: "leetcode-clone-7187b",
  storageBucket: "leetcode-clone-7187b.firebasestorage.app",
  messagingSenderId: "634610061751",
  appId: "1:634610061751:web:f526b66b1cbf65c18e9832",
  measurementId: "G-Q50X3TY39E"
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const firebase = getFirestore(app);

export { auth, firebase, app };