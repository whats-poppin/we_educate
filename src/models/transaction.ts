export interface Transaction {
    id: string,
    discount: string,
    razorpayId: string,
    successful: boolean,
    refundRequested: boolean,
    refundStatus: boolean,
    date: Date,
    totalAmount: number,
    payableAmount: number,
    meta: Object
}