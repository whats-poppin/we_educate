import { ISubscriptionId } from "../interfaces/subscription-id";

export class Individual {
    id: string;
    roles: string;
    subscriptionIds: ISubscriptionId; // Subscription[]
    organisationId: string; // if no org then null
    name: string;
    email: string;
    product: string[]; //Product[]
    createdAt: Date;
    meta: Object;

    constructor(
        id: string,
        roles: string,
        subscriptionIds: ISubscriptionId, // Subscription[]
        organisationId: string, // if no org then null
        name: string,
        email: string,
        product: string[], //Product[]
        createdAt: Date,
        meta: Object) {
        this.id = id;
        this.roles = roles;
        this.subscriptionIds = subscriptionIds;
        this.organisationId = organisationId;
        this.name = name;
        this.email = email;
        this.product = product;
        this.createdAt = createdAt;
        this.meta = meta;
    }
}