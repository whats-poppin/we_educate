export class Transaction {
    id: string;
    discount: string;
    razorpayId: string;
    successful: boolean;
    refundRequested: boolean;
    refundStatus: boolean;
    date: Date;
    totalAmount: number;
    payableAmount: number;
    meta: Object;

    constructor(id: string,
                discount: string,
                razorpayId: string,
                successful: boolean,
                refundRequested: boolean,
                refundStatus: boolean,
                date: Date,
                totalAmount: number,
                payableAmount: number,
                meta: Object) {
        this.id = id;
        this.discount = discount;
        this.razorpayId = razorpayId;
        this.successful = successful;
        this.refundRequested = refundRequested;
        this.refundStatus = refundStatus;
        this.date = date;
        this.totalAmount = totalAmount;
        this.payableAmount = payableAmount;
        this.meta = meta;
    }
}