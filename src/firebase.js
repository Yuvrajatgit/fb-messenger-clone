import firebase from 'firebase/compat/app';
import { initializeApp } from 'firebase/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';


const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyBlX43yQkWczK8sl3i3TrJTAXCTKoiGlc0",
    authDomain: "messenger-clone-e89b2.firebaseapp.com",
    projectId: "messenger-clone-e89b2",
    storageBucket: "messenger-clone-e89b2.appspot.com",
    messagingSenderId: "535799313632",
    appId: "1:535799313632:web:53c8f9adec209a1a948c85",
    measurementId: "G-VXF6LFVC31"
})

const db = firebase.firestore();

export default db;