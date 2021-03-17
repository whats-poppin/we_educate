import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyA6tUBncW__-WwpXXK4di1hL9QHZ1xqtTA",
    authDomain: "we-educate.firebaseapp.com",
    projectId: "we-educate",
    storageBucket: "we-educate.appspot.com",
    messagingSenderId: "296871061171",
    appId: "1:296871061171:web:57c7b43742eff2931a72c6",
    measurementId: "G-YVQX818Z8E"
};

firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const fieldValue = firebase.firestore.FieldValue;

export default firebase;
