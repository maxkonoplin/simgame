import events from 'events';

export default class Workplace extends events.EventEmitter {
    constructor({name, IQ, incomeCash, incomeIQ}){
        super();
        this.name = name;
        this.IQ = IQ;
        this.incomeCash = incomeCash;
        this.incomeIQ = incomeIQ;
        return this;
    }
}