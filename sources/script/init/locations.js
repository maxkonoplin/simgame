import Location from '../class/location';
import tent from '../../../config/location/tent.json';
import abandonedHouse from '../../../config/location/abandoned-house.json';
import trailer from '../../../config/location/trailer.json';
import rentRoom from '../../../config/location/rent-room.json';
import apartment from '../../../config/location/apartment.json';
import penthouse from '../../../config/location/penthouse.json';
import villa from '../../../config/location/villa.json';

export default {
    tent: new Location(tent),
    abandonedHouse: new Location(abandonedHouse),
    trailer: new Location(trailer),
    rentRoom: new Location(rentRoom),
    apartment: new Location(apartment),
    penthouse: new Location(penthouse),
    villa: new Location(villa)
};