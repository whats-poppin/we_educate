export interface Individual {
    id: string,
    subscriptionIds: { active: string[], expired: string[], cancelled: string[] } // Subscription[]
    organisationId: string, // if no org then null
    name: string,
    email: string,
    product: string[], //Product[]
    password: string,
    meta: Object
}