import { initializeApp } from 'firebase/app';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDg1V9GSGPo7GAaighPxuJmMWZ2gO7zD1U",
    authDomain: "flexcode-vlab.firebaseapp.com",
    projectId: "flexcode-vlab",
    storageBucket: "flexcode-vlab.firebasestorage.app",
    messagingSenderId: "745767583783",
    appId: "1:745767583783:web:440f12bbef0af505398e02",
    measurementId: "G-3W96G7N5EY"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
    auth,
    db,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
};