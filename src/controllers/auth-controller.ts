import { auth, facebookAuthProvider, firestore, googleAuthProvider } from "../firebase";
import firebase from 'firebase/app';
import { Individual } from "../models/individual";

export const createUserProfileDocument = async (userAuth: firebase.auth.UserCredential, displayName?: string): Promise<Individual | string> => {
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

export const login = async (event: any, email: string, password: string, orgLogin?: boolean): Promise<Individual | string> => {
    event.preventDefault();
    try {
        if ( orgLogin ) {
            // implement org login
        } else {
            await auth.setPersistence(firebase.auth.Auth.Persistence.SESSION);
            const result = await auth.signInWithEmailAndPassword(email, password);
            return await getLoggedInUser(result.user.uid);
        }
    } catch ( error ) {
        return error.message;
    }
};

export const getLoggedInUser = async (uid: string): Promise<Individual | string> => {
    try {
        const userSnapshot = await firestore.doc(`users/${ uid }`).get();
        return userSnapshot.data() as Individual;
    } catch ( e ) {
        return e.message;
    }
};

export const signup = async (event: any, email: string, password: string, displayName: string, orgSignUp?: boolean): Promise<Individual | string> => {
    event.preventDefault();
    try {
        if ( orgSignUp ) {
        } else {
            await auth.setPersistence(firebase.auth.Auth.Persistence.SESSION);
            const result = await auth.createUserWithEmailAndPassword(email, password);
            return await createUserProfileDocument(result, displayName);
        }
    } catch ( e ) {
        return e.message;
    }
};

export const socialAuth = async (provider: string): Promise<Individual | string> => {
    try {
        let result: firebase.auth.UserCredential;
        await auth.setPersistence(firebase.auth.Auth.Persistence.SESSION);
        if ( provider === 'google' ) {
            result = await auth.signInWithPopup(googleAuthProvider);
        } else {
            result = await auth.signInWithPopup(facebookAuthProvider);
        }
        return !result.additionalUserInfo.isNewUser ? await getLoggedInUser(result.user.uid) : await createUserProfileDocument(result);
    } catch ( e ) {
        return e.message;
    }
};

export const signOut = async (): Promise<void | string> => {
    try {
        await auth.signOut();
    } catch ( e ) {
        return e.message;
    }
};

export const reauthenticate = (currentPassword?: string) => {
    try {
        const user = auth.currentUser;
        if ( user.providerData[0].providerId === 'password' ) {
            const cred = firebase.auth.EmailAuthProvider.credential(
                user.email, currentPassword);
            return user.reauthenticateWithCredential(cred);
        } else {
            return user.reauthenticateWithPopup(user.providerData[0].providerId === 'google.com' ?
                googleAuthProvider : facebookAuthProvider);
        }
    } catch ( e ) {
        return false;
    }
};

export const deleteAccount = async (currentPassword?: string): Promise<string> => {
    try {
        const isReAuthencticated = await reauthenticate(currentPassword);
        const user = auth.currentUser;
        if ( isReAuthencticated ) {
            await user.delete();
            return 'success';
        } else return 'Unknown Error Occurred!!';
    } catch ( e ) {
        return e.message;
    }
};
export const changePassword = async (currentPassword: string, newPassword: string): Promise<string> => {
    try {
        const isReAuthencticated = await reauthenticate(currentPassword);
        const user = auth.currentUser;
        if ( isReAuthencticated ) {
            await user.updatePassword(newPassword)
            return 'success';
        } else return 'Unknown Error Occurred!!';
    } catch ( e ) {
        return e.message;
    }
};

export const forgotPassword = async (email: string): Promise<void | string> => {
    try {
        await auth.sendPasswordResetEmail(email);
    } catch ( e ) {
        return e.message;
    }
};
