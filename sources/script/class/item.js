import events from 'events';

export default class Item extends events.EventEmitter {
    constructor({name, price, renta, itemName}){
        super();
        this.name = name;
        this.price = price;
        this.renta = renta;
        this.itemName = itemName;
        return this;
    }
}