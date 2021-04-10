import { firestore } from "../firebase";
import { Organisation } from "../models/organisation";
import firebase from "firebase";

export const fetchOrganisation = async (orgId: string): Promise<Organisation | string> => {
    try {
        const organisationSnapshot = await firestore.doc(`organisations/${ orgId }`).get();
        return organisationSnapshot.data() as Organisation;
    } catch ( e ) {
        return e.message;
    }
};

export const registerOrganisation = async (orgName: string, address: string, email: string, userAuth: firebase.auth.UserCredential,):
        Promise<Organisation | string> => {
        try {
            const orgRef = firestore.doc(`organisations/${ userAuth.user.uid }`);
            const orgSnapshot = await orgRef.get();
            if ( !orgSnapshot.exists ) {
                const orgData = {
                    products: [ '' ],
                    orgName,
                    address,
                    subscriptionIds: { active: [ '' ], expired: [ '' ], cancelled: [ '' ] },
                    members: [ '' ],
                    email,
                    strength: 0,
                    meta: {}
                }
                await orgRef.set(Object.assign({}, orgData));
                return {
                    products: [],
                    orgName,
                    address,
                    id: userAuth.user.uid,
                    subscriptionIds: { active: [], expired: [], cancelled: [] },
                    members: [],
                    email,
                    strength: 0,
                    meta: {}
                };
            }
        } catch
            ( e ) {
            return e.message;
        }
    }
;


// todo: future work
// export const addCourseToOrganisation = async () => {
//
// };
// export const removeMemberFromOrganisation = () => {
//
// };
// export const addMemberToOrganisation = async ({ joinCode, memberId }: { joinCode: string, memberId: string }) => {
// };
