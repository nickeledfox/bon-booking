import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { SearchPropertiesProps } from '../types/shared';
import styled from 'styled-components';
import { Input } from './Input';

export const SearchOptions = () => {
  const location = useLocation() as unknown as SearchPropertiesProps;
  const [options, setOptions] = useState(location.state.options);
  return (
    <OptionsContainer>
      <label>Options</label>
      <div>
        <Option>
          <span>Min price per night</span>
          <OptionInput type='number' />
        </Option>
        <Option>
          <span>Max price per night</span>
          <OptionInput type='number' />
        </Option>
        <Option>
          <span>Adults</span>
          <OptionInput type='number' min={1} placeholder={options.adult} />
        </Option>
        <Option>
          <span>Children</span>
          <OptionInput type='number' min={0} placeholder={options.children} />
        </Option>
        <Option>
          <span>Rooms</span>
          <OptionInput type='number' min={1} placeholder={options.room} />
        </Option>
      </div>
    </OptionsContainer>
  );
};

const OptionsContainer = styled.div`
  margin: 30px 0 15px 0;
`;

const Option = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  color: #fff;
  font-size: 12px;

  span {
    height: 20px;
  }
`;

const OptionInput = styled(Input)`
  height: 20px !important;
  width: 50px;
`;
