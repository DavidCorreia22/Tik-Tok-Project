
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBOVZamKKtLaf3r9AwCcIc45sVLVlxcppA",
  authDomain: "tiktok-clone-79292.firebaseapp.com",
  projectId: "tiktok-clone-79292",
  storageBucket: "tiktok-clone-79292.appspot.com",
  messagingSenderId: "311551660155",
  appId: "1:311551660155:web:aea01524c5a8bad01852de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;