import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyB0ZRpBfSlp7d51CNgQouYhbL3y7v6lH9A",
    authDomain: "chat-app-b583c.firebaseapp.com",
    projectId: "chat-app-b583c",
    storageBucket: "chat-app-b583c.appspot.com",
    messagingSenderId: "586822896685",
    appId: "1:586822896685:web:2be601fb53dc6f01003ca4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore(app)
export const storage = getStorage()