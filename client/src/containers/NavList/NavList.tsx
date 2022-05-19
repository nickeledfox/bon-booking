import { List, ListItem } from './styled';
import {
  faCar,
  faHotel,
  faMountainCity,
  faPlaneDeparture,
  faTaxi,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const NavMenu = () => {
  return (
    <List>
      <ListItem active>
        <FontAwesomeIcon icon={faHotel} />
        <span>Stays</span>
      </ListItem>
      <ListItem>
        <FontAwesomeIcon icon={faPlaneDeparture} />
        <span>Flights</span>
      </ListItem>
      <ListItem>
        <FontAwesomeIcon icon={faCar} />
        <span>Car Rentals</span>
      </ListItem>
      <ListItem>
        <FontAwesomeIcon icon={faMountainCity} />
        <span>Attractions</span>
      </ListItem>
      <ListItem>
        <FontAwesomeIcon icon={faTaxi} />
        <span>Airport taxis</span>
      </ListItem>
    </List>
  );
};
