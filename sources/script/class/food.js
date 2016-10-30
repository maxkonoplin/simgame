import events from 'events';

export default class Food extends events.EventEmitter {
    constructor({name, price, satiety, duration, quality, replica =[]}){
        super();
        this.name = name;
        this.price = price;
        this.satiety = satiety;
        this.duration = duration;
        this.quality = quality;
        this.replica = replica;
        return this;
    }
}