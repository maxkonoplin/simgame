import events from 'events';

export default class Food extends events.EventEmitter {
    constructor(replica =[]){
        super();
        this.name = name;
        this.price = price;
        this.satiety = satiety;
        this.duration = duration;
        this.quality = quality;
        this.delicious = delicious;
        this.kitchen = kitchen;
        this.replica = replica;
        return this;
    }
}