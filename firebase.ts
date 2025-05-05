import { getApps, getApp, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyByy56e2Xp1h01qnrwuXsbKd0lcnNmOQH8",
  authDomain: "notion-clone-a123c.firebaseapp.com",
  projectId: "notion-clone-a123c",
  storageBucket: "notion-clone-a123c.firebasestorage.app",
  messagingSenderId: "347033776685",
  appId: "1:347033776685:web:f74c2df52426920050fea4",
  measurementId: "G-B3HPRY4H7D",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);

export { db };
