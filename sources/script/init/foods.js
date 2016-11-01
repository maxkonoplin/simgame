import Food from '../class/food';
import trashcan from '../../../config/food/trashcan.json';
import lunch from '../../../config/food/lunch.json';
import kebab from '../../../config/food/kebab.json';
import beer from '../../../config/food/beer.json';
import lunchRiga from '../../../config/food/lunch-riga.json';
import steak from '../../../config/food/steak.json';
import restaurant from '../../../config/food/restaurant.json';
import cook from '../../../config/food/cook.json';

export default {
    trashcan: new Food(trashcan),
    lunch: new Food(lunch),
    kebab: new Food(kebab),
    beer: new Food(beer),
    lunchRiga: new Food(lunchRiga),
    steak: new Food(steak),
    restaurant: new Food(restaurant),
    cook: new Food(cook)
};