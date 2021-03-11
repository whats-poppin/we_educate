export class Subscription {
    startDate: Date;
    endDate: Date;
    productId: string;
    transactionId: string;
    id: string;
    couponCode: string;
    price: number;
    isActive: boolean;
    meta: Object;

    constructor(startDate: Date, endDate: Date,
                productId: string, transactionId: string,
                id: string, couponCode: string,
                price: number, isActive: boolean,
                meta: Object) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.productId = productId;
        this.transactionId = transactionId;
        this.id = id;
        this.couponCode = couponCode;
        this.price = price;
        this.isActive = isActive;
        this.meta = meta;
    }
}