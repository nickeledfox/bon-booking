import {
  faCalendarDays,
  faPerson,
  faPersonWalkingLuggage,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SearchBtn } from './styled';

import { Input } from '../../components/Input';

import '../../styles/swarch.css';

interface SearchProps {}

const Search = ({}: SearchProps) => {
  return (
    <>
      <div className='headerSearch'>
        <div className='headerSearchItem'>
          <FontAwesomeIcon
            icon={faPersonWalkingLuggage}
            className='headerIcon'
          />
          <Input
            type='text'
            placeholder='Where are you going?'
            className='headerSearchInput'
          />
        </div>

        <div className='headerSearchItem'>
          <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' />
          <span className='headerSearchText'>date to date</span>
        </div>

        <div className='headerSearchItem'>
          <FontAwesomeIcon icon={faPerson} className='headerIcon' />
          <span className='headerSearchText'>2 adults 2 children 1 room</span>
        </div>
        <div className='headerSearchItem'>
          <SearchBtn color='dark'>Search</SearchBtn>
        </div>
      </div>
    </>
  );
};
export default Search;
