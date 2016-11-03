import events from 'events';

export default class Workplace extends events.EventEmitter {
    constructor(requirements =[]){
        super();
        this.name = name;
        this.incomeCash = incomeCash;
        this.incomeIQ = incomeIQ;
        this.satiety = satiety;
        this.requirements = requirements;
        return this;
    }
}