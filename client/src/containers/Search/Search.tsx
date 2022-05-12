import {
  faCalendarDays,
  faPerson,
  faPersonWalkingLuggage,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  SearchBtn,
  SearchContainer,
  SearchItem,
  SearchText,
  StyledDateRange,
} from './styled';
import { Input } from '../../components/Input';

import { format } from 'date-fns';
import { useState } from 'react';

const Search = () => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  return (
    <SearchContainer>
      <SearchItem>
        <FontAwesomeIcon icon={faPersonWalkingLuggage} />
        <Input type='text' placeholder='Where are you going?' />
      </SearchItem>

      <SearchItem>
        <FontAwesomeIcon icon={faCalendarDays} />
        <SearchText onClick={() => setOpenDate(!openDate)}>
          {`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(
            date[0].endDate,
            'MM/dd/yyyy'
          )}`}
        </SearchText>
        {openDate && (
          <StyledDateRange
            editableDateInputs={true}
            onChange={(item: {
              selection: { startDate: Date; endDate: Date; key: string };
            }) => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            minDate={new Date()}
          />
        )}
      </SearchItem>

      <SearchItem>
        <FontAwesomeIcon icon={faPerson} />
        <SearchText>2 adults 2 children 1 room</SearchText>
      </SearchItem>

      <SearchItem>
        <SearchBtn color='dark'>Search</SearchBtn>
      </SearchItem>
    </SearchContainer>
  );
};
export default Search;
