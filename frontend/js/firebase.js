// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCkeSacH6emGscYhdK8ru1q_n4qFLaVLY",
  authDomain: "vibe-v-a3ff6.firebaseapp.com",
  projectId: "vibe-v-a3ff6",
  storageBucket: "vibe-v-a3ff6.appspot.com",
  messagingSenderId: "409671076054",
  appId: "1:409671076054:web:be8ca9831d5c30ace16177",
  measurementId: "G-WB2GL49FTK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
const db = getFirestore(app);

export { storage, db };