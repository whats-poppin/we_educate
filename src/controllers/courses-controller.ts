import { firestore } from "../firebase";
import firebase from 'firebase/app'
import { Product, SessionEvent } from "../models/product";

export const fetchAllCourses = async (): Promise<Product[]> => {
    try {
        const courseSnapshot = await firestore.collection(`courses`).get();
        return courseSnapshot.docs.map(doc => ( { ...doc.data(), id: doc.id } as Product ));
    } catch ( e ) {
        return e.message;
    }
};

export const updateCourse = async (courseId: string, updatableFields: { event: SessionEvent }) => {
    try {
        await firestore.collection("courses").doc(courseId).update({
            events: firebase.firestore.FieldValue.arrayUnion(updatableFields.event)
        });
        return true;
    } catch ( e ) {
        return false;
    }
};

export const onCoursePurchaseSuccess = async (courseId: string, userId: string): Promise<string> => {
    try {
        await firestore.doc(`users/${ userId }`)
            .update({ product: firebase.firestore.FieldValue.arrayUnion(courseId) });
        return 'success';
    } catch ( e ) {
        return e.message;
    }
};
