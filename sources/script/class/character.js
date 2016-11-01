import events from 'events';
import Location from './location';
import Food from './food';

export default class Character extends events.EventEmitter {
    constructor(name = 'Ярик', age = 30){
        super();
        this.name = name;
        this.age = age;
        this.cash = 5;
        this.workplace = null;
        this.IQ = 85;
        this.health = 1;
        this.hunger = 0;
        this.location = null;
        this.start = Date.now();
        this.hungerPerTime = 0.01;
        setInterval(() => {
            if(this.hunger >= 0.6){
                if(this.hunger >= 0.8){
                    if(this.hunger >= 1){
                        if(this.cash > 3){
                            let lost = Math.floor(this.cash * 0.4);
                            this.cash -= lost;
                            this.health -= 0.01;
                            this.emit('faint', lost);
                        }
                        else {
                            this.cash = 0;
                            this.health -= 0.014;
                            this.emit('rape');
                        }
                        this.hunger = 0;
                        this.emit('update');
                    }
                    else {
                        this.hunger += (this.hungerPerTime * 2);
                        this.health -= 0.03;
                        this.emit('update');
                    }
                }
                else {
                    this.hunger += (this.hungerPerTime * 1.5);
                    this.health -= 0.002;
                    this.emit('update');
                }
            }
            else {
                this.hunger += this.hungerPerTime;
                this.emit('update');
            }
        }, 1000);
        return this;
    }
    eatFood(food){
        if(!(food instanceof Food)) {
            console.log('not food');
            return false;
        }
        if(this.cash < food.price) {
            this.emit('notEnoughMoneyForFood');
            return false;
        }
        this.cash -= food.price;
        this.hunger += food.satiety;
    }
    applyWorkplace(workplace){

    }
    applyLocation(location){
        if(!(location instanceof Location)) {
            console.log('not location');
            return false;
        }
        if(this.cash < location.price) {
            this.emit('notEnoughMoneyForLocation');
            return false;
        }
        if(this.location !== null && this.location.priority > location.priority) {
            this.emit('doesNotLikeLocation');
            return false;
        }
        if(this.income < location.rent) {
            this.emit('notEnoughIncomeForLocation');
            return false;
        }
        this.cash -= location.price;
        this.location = location;
        this.emit('welcomeNewHome');
        this.emit('update');
        return true;
    }
    heal(health){

    }
    createProgramm(IQ){

    }
    createVirus(IQ){

    }
    relax(){

    }
}