import { firestore } from "../firebase";
import { Organisation } from "../models/organisation";

export const fetchOrganisation = async (orgId: string): Promise<Organisation | string> => {
    try {
        const organisationSnapshot = await firestore.doc(`organisations/${ orgId }`).get();
        return organisationSnapshot.data() as Organisation;
    } catch ( e ) {
        return e.message;
    }
};

export const registerOrganisation = async (orgName: string, address: string, email: string): Promise<Organisation | string> => {
    try {
        const orgData = await firestore.collection(`organisations`).add({
            products: [],
            orgName,
            address,
            subscriptionIds: { active: [], expired: [], cancelled: [] },
            members: [],
            email,
            strength: 0,
            meta: {}
        });
        return {
            products: [],
            orgName,
            address,
            id: orgData.id,
            subscriptionIds: { active: [], expired: [], cancelled: [] },
            members: [],
            email,
            strength: 0,
            meta: {}
        };
    } catch ( e ) {
        return e.message;
    }
};


// todo: future work
// export const addCourseToOrganisation = async () => {
//
// };
// export const removeMemberFromOrganisation = () => {
//
// };
// export const addMemberToOrganisation = async ({ joinCode, memberId }: { joinCode: string, memberId: string }) => {
// };
