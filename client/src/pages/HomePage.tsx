import styled from 'styled-components';
import { Container } from '../styles';
import { H } from '../components/Heading';
import { Categories } from '../components/Categories';
import { Hero } from '../components/Hero';
import { Properties, Subscription } from '../containers';

export const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeContainer>
        {/* <SectionH>
          Start Packing! These Cities are
          <span className='accent'> Open for Travel</span>
        </SectionH> */}
        <SectionH level={4}>Browse by property type</SectionH>
        <Categories />
        <SectionH level={4}>Traveler's Best Choices</SectionH>
        <Properties />
      </HomeContainer>
      <Subscription />
    </>
  );
};

const HomeContainer = styled(Container)`
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const SectionH = styled(H)`
  margin: 5rem 0 -30px 0;
`;
