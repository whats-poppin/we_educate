import { firestore } from "../firebase";
import { Product } from "../models/product";

export const fetchAllCourses = async (): Promise<Product[]> => {
    try {
        const courseSnapshot = await firestore.collection(`courses`).get();
        return courseSnapshot.docs.map(doc => doc.data() as Product);
    } catch ( e ) {
        return e.message;
    }
};