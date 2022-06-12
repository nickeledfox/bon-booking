import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import { SearchPropertiesProps } from '../types/shared';

import styled from 'styled-components';

import { SearchItem } from '../components/SearchItem';
import { SideBar } from '../components/SideBar';
import { Container } from '../styles';

export const PropertiesPage = () => {
  // const location = useLocation() as unknown as SearchPropertiesProps;
  // const from = location.state?.from?.pathname || '/';

  // const [destination, setDestination] = useState(location.state.destination);
  // const [date, setDate] = useState(location.state.date);
  // const [openDate, setOpenDate] = useState(false);
  // const [options, setOptions] = useState(location.state.options);

  return (
    <PageContainer>
      <InnerWrapper>
        <SideBar />
        <SearchResult>
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
        </SearchResult>
      </InnerWrapper>
    </PageContainer>
  );
};

const PageContainer = styled(Container)`
  display: flex;
  justify-content: center;
  margin-top: 7rem;
`;

const InnerWrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  display: flex;
  gap: 20px;
  margin-bottom: 3rem;
  border-bottom: 1px solid rgba(0, 131, 202, 0.21);
`;

const SearchResult = styled.section`
  flex: 3;
  margin-bottom: 13rem;
`;
