import events from 'events';

export default class Workplace extends events.EventEmitter {
    constructor({name, incomeCash, incomeIQ, priority, satiety, requirements =[]}){
        super();
        this.name = name;
        this.incomeCash = incomeCash;
        this.incomeIQ = incomeIQ;
        this.priority = priority;
        this.satiety = satiety;
        this.requirements = requirements;
        return this;
    }
}