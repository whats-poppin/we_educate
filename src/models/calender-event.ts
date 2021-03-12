export class CalenderEvent {
    id: string;
    eventName: string;
    startDate: Date;
    endDate: Date;
    description: string;
    imgUrl: string;
    eventUrl: string;
    meta: Object;

    constructor(id: string,
                eventName: string,
                startDate: Date,
                endDate: Date,
                description: string,
                imgUrl: string,
                eventUrl: string,
                meta: Object) {
        this.id = id;
        this.eventName = eventName;
        this.startDate = startDate;
        this.endDate = endDate;
        this.description = description;
        this.imgUrl = imgUrl;
        this.eventUrl = eventUrl;
        this.meta = meta;

    }
}