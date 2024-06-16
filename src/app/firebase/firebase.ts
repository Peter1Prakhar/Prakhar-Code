import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getApp, getApps } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAMnxa6qlqrArkbswkNBdWXxvkqwwAzess",
  authDomain: "leetcode-clone-8c8d7.firebaseapp.com",
  projectId: "leetcode-clone-8c8d7",
  storageBucket: "leetcode-clone-8c8d7.appspot.com",
  messagingSenderId: "1060948510278",
  appId: "1:1060948510278:web:5d984cf9fcefe712c82c47"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const firebase = getFirestore(app);

export { auth, firebase, app };