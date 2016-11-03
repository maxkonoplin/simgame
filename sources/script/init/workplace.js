import Workplace from '../class/workplace';
import janitor from '../../../config/workplace/janitor.json';
import laborer from '../../../config/workplace/laborer.json';
import waiter from '../../../config/workplace/waiter.json';
import manager from '../../../config/workplace/manager.json';
import programmer from '../../../config/workplace/programmer.json';
import chief from '../../../config/workplace/chief.json';
import director from '../../../config/workplace/director.json';

export default {
    janitor: new Workplace(janitor),
    laborer: new Workplace(laborer),
    waiter: new Workplace(waiter),
    manager: new Workplace(manager),
    programmer: new Workplace(programmer),
    chief: new Workplace(chief),
    director: new Workplace(director)
};