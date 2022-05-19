import styled from 'styled-components';
import { Container } from '../styles';
import { H } from '../components/Heading';
import Header from '../containers/Header';
import Featured from '../containers/Featured';
import { Categories } from '../components/Categories';
import Properties from '../containers/Properties';
import Subscription from '../containers/Subscription';

const HomePage = () => {
  return (
    <>
      <Header />
      <HomeContainer>
        <SectionH>
          Start Packing! These Cities are
          <span className='accent'> Open for Travel</span>
        </SectionH>

        <Featured />
        <SectionH level={4}>Browse by property type</SectionH>
        <Categories />
        <SectionH level={4}>Traveler's Best Choices</SectionH>
        <Properties />
      </HomeContainer>
      <Subscription />
    </>
  );
};

export default HomePage;

const HomeContainer = styled(Container)`
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const SectionH = styled(H)`
  margin: 5rem 0 -30px 0;
`;
