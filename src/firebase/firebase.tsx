// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyDIuns1nYm4ECraOatzn40MPMrGwDORvgU",
//     authDomain: "future-voting.firebaseapp.com",
//     projectId: "future-voting",
//     storageBucket: "future-voting.appspot.com",
//     messagingSenderId: "248901548022",
//     appId: "1:248901548022:web:9b17a1a22ee6ec84a2b9d7",
//     measurementId: "G-BTM4XZ162J"
// };

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSEGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let analytics;
isSupported().then((isSupported) => {
  if (isSupported) {
    analytics = getAnalytics(app);
  }
});
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore();

export { app, auth, provider, db, analytics };
