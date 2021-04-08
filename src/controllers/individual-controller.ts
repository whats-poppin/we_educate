import { auth, firestore } from "../firebase";

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
