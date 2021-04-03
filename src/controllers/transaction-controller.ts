import { Transaction } from "../models/transaction";
import { firestore } from "../firebase";

export const getUserTransactions = async (userId: string): Promise<Transaction[] | string> => {
    try {
        const transactionSnapshot = await firestore.collection(`transactions`)
            .where("userId", "==", userId)
            .get();
        return transactionSnapshot.docs.map(doc => ( { ...doc.data(), id: doc.id } as Transaction ));
    } catch ( e ) {
        return e.message;
    }
};