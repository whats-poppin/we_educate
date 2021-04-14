import { auth, firestore } from "../firebase";
import firebase from "firebase";
import { Individual } from "../models/individual";

export const registerUser = async (userAuth: firebase.auth.UserCredential, displayName?: string): Promise<Individual | string> => {
    if ( !userAuth )
        return 'An error occurred, please try again later.';
    const userRef = firestore.doc(`users/${ userAuth.user.uid }`);
    const userSnapshot = await userRef.get();
    if ( !userSnapshot.exists ) {
        const { email } = userAuth.user;
        const name = displayName ?? userAuth.user.displayName;
        const createdAt = firebase.firestore.Timestamp.fromDate(new Date());
        try {
            const individual: Individual = new Individual(
                userAuth.user.uid,
                '',
                { active: [], cancelled: [], expired: [] },
                '',
                name,
                email,
                [],
                createdAt,
                {},
            );
            await userRef.set(Object.assign({}, individual));
            return individual;
        } catch ( e ) {
            return e.message;
        }
    } else {
        return 'An error occurred, please contact the developers.';
    }
};


export const updateName = async (name: string) => {
    try {
        await firestore.collection("users").doc(auth.currentUser.uid).update({ name: name });
        return true;
    } catch ( e ) {
        return false;
    }
};

export const leaveOrganisation = async () => {
    try {
        await firestore.collection("users").doc(auth.currentUser.uid).update({ organisationId: '' });
        return true;
    } catch ( e ) {
        return false;
    }
};

export const joinOrganisation = async (organisationId: string) => {
    try {
        await firestore.collection("users").doc(auth.currentUser.uid).update({ organisationId });
        return true;
    } catch ( e ) {
        return false;
    }
};
