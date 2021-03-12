import {ISubscriptionId} from "../interfaces/subscription-id";

export class Individual {
    id: string;
    subscriptionIds: ISubscriptionId; // Subscription[]
    organisationId: string; // if no org then null
    name: string;
    email: string;
    product: string[]; //Product[]
    password: string;
    meta: Object;

    constructor(
        id: string,
        subscriptionIds: ISubscriptionId, // Subscription[]
        organisationId: string, // if no org then null
        name: string,
        email: string,
        product: string[], //Product[]
        password: string,
        meta: Object) {
        this.id = id;
        this.subscriptionIds = subscriptionIds;
        this.organisationId = organisationId;
        this.name = name;
        this.email = email;
        this.product = product;
        this.password = password;
        this.meta = meta;
    }
}