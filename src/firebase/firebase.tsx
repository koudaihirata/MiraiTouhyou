// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDIuns1nYm4ECraOatzn40MPMrGwDORvgU",
    authDomain: "future-voting.firebaseapp.com",
    projectId: "future-voting",
    storageBucket: "future-voting.appspot.com",
    messagingSenderId: "248901548022",
    appId: "1:248901548022:web:9b17a1a22ee6ec84a2b9d7",
    measurementId: "G-BTM4XZ162J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore();

export { app, auth, provider, db };
