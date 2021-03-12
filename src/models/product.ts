export class Product {
    id: string;
    name: string;
    events: string[];
    description: string;
    imgUrl: string;
    meta: Object

    constructor(id: string,
    name: string,
    events: string[],
    description: string,
    imgUrl: string,
    meta: Object) {
        this.id = id;
        this.name = name;
        this.events = events;
        this.description = description;
        this.imgUrl = imgUrl;
        this.meta = meta;
    }

}