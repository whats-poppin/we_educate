import { ISubscriptionId } from '../interfaces/subscription-id';

export type OrgProduct = { name: string, id: string };

export class Organisation {
    id: string;
    products: OrgProduct[];
    orgName: string;
    subscriptionIds: ISubscriptionId;
    members: string[];
    email: string;
    address: string;
    strength: number;
    meta: Object;

    constructor(id: string,
                products: OrgProduct[],
                orgName: string,
                subscriptionIds: ISubscriptionId,
                members: string[],
                email: string,
                address: string,
                strength: number,
                meta: Object) {
        this.id = id;
        this.products = products;
        this.orgName = orgName;
        this.address = address;
        this.subscriptionIds = subscriptionIds;
        this.members = members;
        this.email = email;
        this.strength = strength;
        this.meta = meta;
    }
}
