import firebase from 'firebase/app'; 
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
}

firebase.initializeApp(config)
const app = firebase.app();
const auth = firebase.auth();
const firestore = firebase.firestore();

export {app, auth, firestore, firebase}
