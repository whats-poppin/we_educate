import { Transaction } from "../models/transaction";
import { firestore } from "../firebase";
import firebase from "firebase/app";

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

export const saveTransaction = async ({ razorpayId, userId, totalAmount }:
                                          { razorpayId: string, userId: string, totalAmount: number }): Promise<string> => {
    try {
        const date = firebase.firestore.Timestamp.fromDate(new Date());
        await firestore.collection('transactions').add({
            razorpayId,
            userId,
            totalAmount,
            meta: {},
            refundRequested: false,
            refundStatus: 'Not Initiated',
            discount: 0,
            date,
            successful: true
        });
    } catch ( e ) {
        return e.message;
    }
};