import { List, ListItem } from './styled';
import {
  faBed,
  faCar,
  faMattressPillow,
  faPlane,
  faTaxi,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ListMenu = () => {
  return (
    <List>
      <ListItem active>
        <FontAwesomeIcon icon={faBed} />
        <span>Stays</span>
      </ListItem>
      <ListItem>
        <FontAwesomeIcon icon={faPlane} />
        <span>Flights</span>
      </ListItem>
      <ListItem>
        <FontAwesomeIcon icon={faCar} />
        <span>Car Rentals</span>
      </ListItem>
      <ListItem>
        <FontAwesomeIcon icon={faMattressPillow} />
        <span>Attractions</span>
      </ListItem>
      <ListItem>
        <FontAwesomeIcon icon={faTaxi} />
        <span>Airport taxis</span>
      </ListItem>
    </List>
  );
};
