import {ISubscriptionId} from '../interfaces/subscription-id';

export class Organisation {
    id: string;
    product: string[];//
    orgName: string;//
    subscriptionIds: ISubscriptionId;
    members: string[];
    email: string;//
    password: string;
    joinCode: number;
    strength: number;//
    meta: Object;

    constructor(id: string,
                product: string[],
                orgName: string,
                subscriptionIds: ISubscriptionId,
                members: string[],
                email: string,
                password: string,
                joinCode: number,
                strength: number,
                meta: Object) {
        this.id = id;
        this.product = product;
        this.orgName = orgName;
        this.subscriptionIds = subscriptionIds;
        this.members = members;
        this.email = email;
        this.password = password;
        this.joinCode = joinCode;
        this.strength = strength;
        this.meta = meta;

    }
}