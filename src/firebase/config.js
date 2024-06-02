// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDgFQQtGugLuJ5on-wdJW63KjYFgB4mH7o",
    authDomain: "totem-7e68c.firebaseapp.com",
    projectId: "totem-7e68c",
    storageBucket: "totem-7e68c.appspot.com",
    messagingSenderId: "648074676375",
    appId: "1:648074676375:web:e682b2d1a276b8a5cd01d2"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
