import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';

import styled from 'styled-components';
import { SearchOptions } from './SearchOptions';
import { BtnContainer } from './Button';

import { SearchPropertiesProps } from '../types/shared';
import { Input } from './Input';

import {
  faCalendarDays,
  faPlaneArrival,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SideBar = () => {
  const location = useLocation() as unknown as SearchPropertiesProps;
  const from = location.state?.from?.pathname || '/';

  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);

  return (
    <SearchBar>
      <Item>
        <label>Destination</label>
        <Input placeholder={destination} type='text' />
        <FontAwesomeIcon
          icon={faPlaneArrival}
          style={{
            position: 'absolute',
            top: '60%',
            right: '5px',
          }}
        />
      </Item>
      <Item>
        <label>Check-in Date</label>
        <span
          // otherwise it's conflict with the Date Range styles
          style={{
            background: '#fff',
            color: 'var(--c-font5)',
            height: '40px',
            width: '98%',
            paddingLeft: '10px',
          }}
          onClick={() => setOpenDate(!openDate)}
        >
          {`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(
            date[0].endDate,
            'MM/dd/yyyy'
          )}`}
          <FontAwesomeIcon icon={faCalendarDays} />
        </span>
        {openDate && (
          <DateRange
            onChange={(item: { selection: Date }) => setDate([item.selection])}
            minDate={new Date()}
            ranges={date}
          />
        )}
      </Item>
      <Item>
        <SearchOptions />
      </Item>
      <SearchBtn color='primary'>Search</SearchBtn>
    </SearchBar>
  );
};

const SearchBar = styled.aside`
  flex: 1;
  background-color: var(--c-main);
  padding: 46px 40px;
  position: sticky;
  top: 10px;
  height: max-content;

  margin-bottom: 15rem;
  border-radius: 5px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);

  svg {
    color: var(--c-3);
    height: 18px;
    width: 20px;
    padding-right: 5px;
  }
`;

const SearchBtn = styled(BtnContainer)`
  width: 100%;
  height: 62px;
  font-weight: 500;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 10px;
  position: relative;

  label {
    color: #fff;
  }

  input {
    height: 40px;
    border: none;
    padding: 5px 0 5px 10px;
    color: var(--c-font5);

    ::placeholder {
      color: var(--c-font5);
    }
  }

  span {
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
  }

  input,
  button,
  span {
    border-radius: 5px;
  }
`;
