// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"


const firebaseConfig = {
    apiKey: "AIzaSyAYCDcjMb37K6-jY137Iul1MBeNxnOyppM",
    authDomain: "insta-clone-yt-3e4f1.firebaseapp.com",
    projectId: "insta-clone-yt-3e4f1",
    storageBucket: "insta-clone-yt-3e4f1.appspot.com",
    messagingSenderId: "728754972632",
    appId: "1:728754972632:web:70dcfbf0cac7dcc9e634ad",
    measurementId: "G-HNDS5EGEDL"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);


export { app, auth, firestore, storage }
