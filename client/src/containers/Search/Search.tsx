import {
  faCalendarDays,
  faPeopleRoof,
  faPersonCircleCheck,
  faPersonWalkingLuggage,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as S from './styled';
import { Input } from '../../components/Input';
import { CounterBtn } from '../../components/Button';

import { format } from 'date-fns';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Search = () => {
  const [destination, setDestination] = useState('');
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

  const navigate = useNavigate();

  const handleOption = (value: string | number, operation: string) => {
    setOptions((prev: any) => {
      return {
        ...prev,
        [value]: operation === 'i' ? options[value] + 1 : options[value] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate('/searchresults', { state: { destination, date, options } });
  };

  return (
    <S.SearchContainer>
      <S.SearchBar>
        <S.SearchItem>
          <FontAwesomeIcon icon={faPersonWalkingLuggage} />
          <Input
            type='text'
            placeholder='Where are you going to?'
            onChange={(e) => setDestination(e.target.value)}
          />
        </S.SearchItem>

        <S.SearchItem>
          <FontAwesomeIcon icon={faCalendarDays} />
          <span onClick={() => setOpenDate(!openDate)}>
            <S.SearchText>
              {`Departing ${format(date[0].startDate, 'MM/dd/yyyy')} `}
            </S.SearchText>
            <strong> · </strong>
            <S.SearchText>
              {`Returning ${format(date[0].endDate, 'MM/dd/yyyy')}`}
            </S.SearchText>
          </span>

          {openDate && (
            <S.StyledDateRange
              editableDateInputs={true}
              onChange={(item: {
                selection: { startDate: Date; endDate: Date; key: string };
              }) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              minDate={new Date()}
            />
          )}
        </S.SearchItem>

        <S.SearchItem>
          {options.children <= 0 && options.adults <= 1 ? (
            <FontAwesomeIcon icon={faPersonCircleCheck} />
          ) : (
            <FontAwesomeIcon icon={faPeopleRoof} />
          )}
          <S.SearchText
            onClick={() => setOpenOptions(!openOptions)}
          >{`${options.adults} adults - ${options.children} children - ${options.rooms} rooms`}</S.SearchText>

          {openOptions && (
            <S.Options>
              <S.OptionItem>
                <span>Adults</span>
                <S.OptionCounter>
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
                </S.OptionCounter>
              </S.OptionItem>

              <S.OptionItem>
                <span>Children</span>
                <S.OptionCounter>
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
                </S.OptionCounter>
              </S.OptionItem>

              <S.OptionItem>
                <span>Rooms</span>
                <S.OptionCounter>
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
                </S.OptionCounter>
              </S.OptionItem>
            </S.Options>
          )}
        </S.SearchItem>
      </S.SearchBar>
      <S.SearchBtn color='muted' onClick={handleSearch}>
        Search
      </S.SearchBtn>
    </S.SearchContainer>
  );
};
