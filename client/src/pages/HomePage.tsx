import styled from 'styled-components';
import { Container } from '../styles';
import { H } from '../components/Heading';
import Header from '../containers/Header';
import Featured from '../containers/Featured';
import { Categories } from '../components/Categories';
import Chosen from '../containers/Properties';

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
        <SectionH level={4}>Homes guests love</SectionH>
        <Chosen />
        {/* <MailList/> */}
        {/* <Footer/> */}
      </HomeContainer>
    </>
  );
};

export default HomePage;

const HomeContainer = styled(Container)`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const SectionH = styled(H)`
  margin: 1rem 0 0 0;
`;
