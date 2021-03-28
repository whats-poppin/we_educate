export type ProductMeta = {
    competenciesDevelopment: string[];
    contents: string[];
    duration: string;
    participants: 'Level – 0 / Lower-level Managers'
        | 'Level – I / Lower-level Managers' | 'Level – II / Middle-level Managers'
        | 'Level – III / Senior-level Managers' | 'Level – IV / Top-level Managers';
    fee: string;
    studyMaterial: string[];
    faculty: string;
};

export class Product {
    id: string;
    name: string;
    events: string[];
    imgUrl: string;
    meta: ProductMeta

    constructor(id: string,
                name: string,
                events: string[],
                imgUrl: string,
                meta: ProductMeta) {
        this.id = id;
        this.name = name;
        this.events = events;
        this.imgUrl = imgUrl;
        this.meta = meta;
    }

}