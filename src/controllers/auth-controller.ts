import {auth, firestore} from "../firebase";
import firebase from 'firebase';
import {Individual} from "../models/individual";

export const createUserProfileDocument = async (userAuth: any) => {
    if (!userAuth)
        return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const userSnapshot = await userRef.get();
    if (!userSnapshot.exists) {
        // const {email, displayName} = userAuth;
        // const createdAt = new Date();
        try {
            const individual: Individual = new Individual('',
                {active: [], cancelled: [], expired: []},
                '',
                '',
                '',
                [],
                '',
                {},
            );
            await userRef.set(individual);
        } catch (e) {
            console.log(e.message);
        }
    }
    return userRef;
};

export const login = async (event: any, email: string, password: string): Promise<firebase.auth.UserCredential | string> => {
    event.preventDefault();
    try {
        return await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
        return error.message;
    }
};

export const signup = async (event: any, email: string, password: string): Promise<firebase.auth.UserCredential | string> => {
    event.preventDefault();
    try {
        // auth.signInWithEmailAndPassword()
        return 'inworks';
    } catch (e) {
        return e.message;
    }
};

export const forgotPassword = async (event: any, email: string): Promise<boolean | string> => {
    event.preventDefault();
    try {
        // auth.sendPasswordResetEmail()
        return true;
    } catch (e) {
        return e.message;
    }
};