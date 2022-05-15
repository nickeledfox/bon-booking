import {
  faCalendarDays,
  faPeopleRoof,
  faPersonCircleCheck,
  faPersonWalkingLuggage,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  SearchBtn,
  SearchContainer,
  SearchItem,
  SearchText,
  StyledDateRange,
  Options,
  OptionItem,
  OptionCounter,
} from './styled';
import { Input } from '../../components/Input';

import { format } from 'date-fns';
import { useState } from 'react';

import { CounterBtn } from '../../components/Button';

const Search = () => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  let [options, setOptions] = useState<any>({
    adults: 1,
    children: 0,
    rooms: 1,
  });

  const handleOption = (value: string | number, operation: string) => {
    setOptions((prev: any) => {
      return {
        ...prev,
        [value]: operation === 'i' ? options[value] + 1 : options[value] - 1,
      };
    });
  };

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
        {options.adults <= 1 ? (
          <FontAwesomeIcon icon={faPersonCircleCheck} />
        ) : (
          <FontAwesomeIcon icon={faPeopleRoof} />
        )}
        <SearchText
          onClick={() => setOpenOptions(!openOptions)}
        >{`${options.adults} adults - ${options.children} children - ${options.rooms} rooms`}</SearchText>

        {openOptions && (
          <Options>
            <OptionItem>
              <span>Adults</span>
              <OptionCounter>
                <CounterBtn
                  onClick={() => handleOption('adults', 'd')}
                  disabled={options.adults <= 1}
                >
                  -
                </CounterBtn>
                <span>{options.adults}</span>
                <CounterBtn onClick={() => handleOption('adults', 'i')}>
                  +
                </CounterBtn>
              </OptionCounter>
            </OptionItem>

            <OptionItem>
              <span>Children</span>
              <OptionCounter>
                <CounterBtn
                  onClick={() => handleOption('children', 'd')}
                  disabled={options.children <= 0}
                >
                  -
                </CounterBtn>
                <span>{options.children}</span>
                <CounterBtn onClick={() => handleOption('children', 'i')}>
                  +
                </CounterBtn>
              </OptionCounter>
            </OptionItem>

            <OptionItem>
              <span>Rooms</span>
              <OptionCounter>
                <CounterBtn
                  onClick={() => handleOption('rooms', 'd')}
                  disabled={options.rooms <= 1}
                >
                  -
                </CounterBtn>
                <span>{options.rooms}</span>
                <CounterBtn onClick={() => handleOption('rooms', 'i')}>
                  +
                </CounterBtn>
              </OptionCounter>
            </OptionItem>
          </Options>
        )}
      </SearchItem>

      <SearchItem>
        <SearchBtn color='dark'>Search</SearchBtn>
      </SearchItem>
    </SearchContainer>
  );
};
export default Search;
