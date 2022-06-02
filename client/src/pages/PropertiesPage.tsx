import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';

import styled from 'styled-components';

import SearchItem from '../components/SearchItem';
import { SideBar } from '../components/SideBar';
import { Container } from '../styles';

type SearchPropertiesProps = {
  state: {
    from: Location;
    destination: string;
    date: Date | any;
    options: {
      adult: string;
      children: string;
      room: string;
    };
  };
};

export const PropertiesPage = () => {
  const location = useLocation() as unknown as SearchPropertiesProps;
  const from = location.state?.from?.pathname || '/';

  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  return (
    <PageContainer>
      <InnerWrapper>
        <SideBar />

        <div className='listResult'>
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
        </div>
      </InnerWrapper>
    </PageContainer>
  );
};

const PageContainer = styled(Container)`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const InnerWrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  display: flex;
  gap: 20px;
`;
