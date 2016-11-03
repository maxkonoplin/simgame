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
        this.happiness = 1;
        this.health = 1;
        this.hunger = 0;
        this.location = null;
        this.inventory = {
            "phone": false,
            "documents": false,
            "computer": false,
            "maid": false
        };
        this.start = Date.now();
        this.hungerPerTime = 0.01;
        setInterval(() => {
            if(this.hunger >= 0.6){
                if(this.hunger >= 0.8){
                    if(this.hunger + (this.hungerPerTime * 2) >= 1){
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
                    this.emit('hunger');
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
        if(food.kitchen == true) {
            if(this.location == null) {
                this.emit('notEnoughLocationForFood');
                return false;
            }
            if(this.location.kitchen == false) {
                this.emit('notEnoughKitchenForFood');
                return false;
            }
        }
        if(this.hunger <= food.satiety) {
            this.cash -= food.price;
            this.hunger = 0;
            this.emit('personHadEaten');
            return true;
        }
        else {
            this.cash -= food.price;
            this.hunger -= food.satiety;
            this.emit('personLittleHungry');
            return true;
        }
    }
    applyWorkplace(workplace){
        if(!(workplace instanceof Workplace)) {
            console.log('not workplace');
            return false;
        }
        if(this.workplace !== null && this.workplace.priority > workplace.priority) {
            this.emit('doesNotLikeWorkplace');
            return false;
        }
        if(this.inventory.phone == this.workplace.requirements.phone) {
            this.emit('notEnoughtPhoneForWorkplace');
            return false;
        }
        if(this.inventory.documents == this.workplace.requirements.documents)
        this.emit('welcomeNewWorkplace');
        this.emit('update');
        return true;
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