import events from 'events';

export default class Location extends events.EventEmitter {
    constructor({name, price, rent, comfort, kitchen, electricity, internet, priority = 0, replica = []}){
        super();
        this.name = name;
        this.price = price;
        this.rent = rent;
        this.comfort = comfort;
        this.kitchen = kitchen;
        this.electricity = electricity;
        this.internet = internet;
        this.priority = priority;
        this.replica = replica;
        return this;
    }
}