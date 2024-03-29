import firebase from "firebase/app";

export class Transaction {
    id: string;
    userId: string;
    discount: string;
    razorpayId: string;
    successful: boolean;
    refundRequested: boolean;
    refundStatus: 'Not Initiated' | 'Processing' | 'Refunded';
    date: firebase.firestore.Timestamp;
    totalAmount: number;
    meta: Object;

    constructor(id: string,
                userId: string,
                discount: string,
                razorpayId: string,
                successful: boolean,
                refundRequested: boolean,
                refundStatus: 'Not Initiated' | 'Processing' | 'Refunded',
                date: firebase.firestore.Timestamp,
                totalAmount: number,
                meta: Object) {
        this.id = id;
        this.discount = discount;
        this.razorpayId = razorpayId;
        this.successful = successful;
        this.refundRequested = refundRequested;
        this.refundStatus = refundStatus;
        this.date = date;
        this.totalAmount = totalAmount;
        this.meta = meta;
    }
}