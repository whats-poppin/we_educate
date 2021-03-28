import { ISubscriptionId } from "../interfaces/subscription-id";

export class Individual {
    id: string;
    subscriptionIds: ISubscriptionId; // Subscription[]
    organisationId: string; // if no org then null
    name: string;
    email: string;
    transactionIds: string[]; // Transaction[]
    product: string[]; //Product[]
    createdAt: Date;
    meta: Object;

    constructor(
        id: string,
        subscriptionIds: ISubscriptionId, // Subscription[]
        organisationId: string, // if no org then null
        name: string,
        transactionIds: string[],
        email: string,
        product: string[], //Product[]
        createdAt: Date,
        meta: Object) {
        this.id = id;
        this.transactionIds = transactionIds;
        this.subscriptionIds = subscriptionIds;
        this.organisationId = organisationId;
        this.name = name;
        this.email = email;
        this.product = product;
        this.createdAt = createdAt;
        this.meta = meta;
    }
}