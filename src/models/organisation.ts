export interface Organisation {
    id: string,
    product: string[],
    orgName: string,
    subscriptionIds: { active: string[], expired: string[], cancelled: string[] },
    members: string[],
    email: string,
    password: string,
    joinCode: number,
    strength: number,
    meta: Object
}