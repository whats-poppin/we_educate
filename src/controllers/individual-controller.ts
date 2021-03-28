import { auth, firestore } from "../firebase";

export const updateName = async (name: string) => {
    try {
        await firestore.collection("users").doc(auth.currentUser.uid).update({ name: name });
        return true;
    } catch ( e ) {
        console.log(e)
        return false;
    }
};