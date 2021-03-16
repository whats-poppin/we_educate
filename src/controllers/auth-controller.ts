import {firestore} from "../firebase";
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
}