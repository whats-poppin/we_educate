import firebase from 'firebase/app'
import "firebase/firestore";


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

export const firestore = firebase.firestore();
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
