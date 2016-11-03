import './common/jquery';
import 'bootstrap';

import Character from './class/character';

import log from './helpers/log';
import modalDuration from './helpers/modal';
import random from './helpers/random';

import renderPage from './common/render-page';

import locations from './init/locations';
import foods from './init/foods';
import workplace from './init/workplace';

let person = new Character();

global.person = person;

// init
$(document).ready(() => {

    $('[data-toggle="tooltip"]').tooltip({
        trigger: 'hover'
    });

    renderPage(person);

    // change pages
    let btnTabs = $('.btn-tab');
    btnTabs.on('click', function() {
        btnTabs.removeClass('btn-primary disabled');
        $(this).addClass('btn-primary disabled');
    });

    // apply workplace
    $('.btn-job').on('click', function (){
        let name = $(this).data('workplace');
        if (person.applyWorkplace(workplace[name])) {
            $('.btn-location.btn-success').removeClass('btn-success').addClass('btn-primary').removeAttr('disabled');
            $(this).removeClass('btn-primary').addClass('btn-success').attr('disabled', 'disabled');
        }
    });

    // apply location
    $('.btn-location').on('click', function (){
        let name = $(this).data('location');
        if (person.applyLocation(locations[name])) {
            $('.btn-location.btn-success').removeClass('btn-success').addClass('btn-primary').removeAttr('disabled');
            $(this).removeClass('btn-primary').addClass('btn-success').attr('disabled', 'disabled');
        }
    });

    // apply eat
    $('.btn-eat').on('click', function (){
        let name = $(this).data('food');
        if (person.eatFood(foods[name])) {
            modalDuration(random.index(foods[name].replica), foods[name].name, foods[name].duration);
        }
    });

    // logs
    person.on('update', () => renderPage(person));

    person.on('hunger', () => log.warning(`Ярик очень голоден, он начинает терять здоровье!`));
    person.on('faint', (lost) => log.error(`Ярик потерял созание! Проснулся сытым, голова раскалывается, в кармане не хватает ${lost}$!`));
    person.on('rape', () => log.error(`Ярик потерял созание! Проснулся сытым, голова раскалывается, карманы пусты, анал слегка побаливает и кровоточит!`));

    person.on('notEnoughMoneyForLocation', () => log.warning(`notEnoughMoneyForLocation`));
    person.on('doesNotLikeLocation', () => log.warning(`doesNotLikeLocation`));
    person.on('notEnoughIncomeForLocation', () => log.warning(`notEnoughIncomeForLocation`));
    person.on('welcomeNewHome', () => log.success(random.index(person.location.replica)));

});
