import firebase from 'firebase/app';

export type SessionEvent = {
    startTime: firebase.firestore.Timestamp,
    duration: number,
    joinLink: string,
}

export type ProductMeta = {
    competenciesDevelopment: string[];
    contents: string[];
    duration: string;
    participantLevel: 'Level – 0 / Lower-level Managers'
        | 'Level – I / Lower-level Managers' | 'Level – II / Middle-level Managers'
        | 'Level – III / Senior-level Managers' | 'Level – IV / Top-level Managers';
    fee: string;
    studyMaterial: { link: string, name: string, }[];
    faculty: string;
};

export class Product {
    id: string;
    name: string;
    events: SessionEvent[];
    imgUrl: string;
    meta: ProductMeta

    constructor(id: string,
                name: string,
                events: SessionEvent[],
                imgUrl: string,
                meta: ProductMeta) {
        this.id = id;
        this.name = name;
        this.events = events;
        this.imgUrl = imgUrl;
        this.meta = meta;
    }
}
