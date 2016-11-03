import events from 'events';
import Location from './location';
import Food from './food';
import Workplace from './workplace';

export default class Character extends events.EventEmitter {
    constructor(name = 'Ярик', age = 30){
        super();
        this.name = name;
        this.age = age;
        this.cash = 5;
        this.IQ = 85;
        this.happiness = 1;
        this.health = 1;
        this.hunger = 0;
        this.start = Date.now();
        this.workplace = null;
        this.location = null;
        this.inventory = {
            phone: false,
            documents: false,
            computer: false,
            maid: false
        };
        this.income = {
            incomeCash: 0,
            incomeIQ: 0,
            hungerPerTime: 0.01
        };
        setInterval(() => {
            let bonusHunger = 0;
            this.IQ += this.income.incomeIQ;
            this.cash += this.income.incomeCash;
            if(this.hunger + this.income.hungerPerTime >= 1) {
                if(this.cash > 3) {
                    let lost = Math.floor(this.cash * 0.4);
                    this.cash -= lost;
                    this.emit('faint', lost);
                } else {
                    this.cash = 0;
                    this.emit('rape');
                }
                this.hunger = 0;
                this.health -= 0.01;
                this.emit('update');
                return false;
            }
            if(this.hunger >= 0.6) {
                this.health -= 0.01;
                this.emit('hunger');
            }
            if(this.workplace != null) {
                bonusHunger += this.workplace.satiety;
            }
            if(this.inventory.maid = true) {
                bonusHunger += 0.003;
            }
            this.hunger += this.income.hungerPerTime - bonusHunger;
            this.emit('update');
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
        if(this.inventory.phone !== true && this.inventory.phone !== workplace.requirements.phone) {
            this.emit('notEnoughtPhoneForWorkplace');
            return false;
        }
        if(this.inventory.documents !== true && this.inventory.documents !== workplace.requirements.documents) {
            this.emit('notEnoughtDocsForWorkplace');
            return false;
        }
        if(this.inventory.computer !== true && this.inventory.computer !== workplace.requirements.computer) {
            this.emit('notEnoughtCompForWorkplace');
            return false;
        }
        if(this.IQ < workplace.requirements.IQ) {
            this.emit('notEnoughtIqForWorkplace');
            return false;
        }
        this.workplace = workplace;
        this.income.incomeCash = workplace.incomeCash;
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
    applyInventory(item){

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