import styled from 'styled-components';
import { Container } from '../styles';
import { H } from '../components/Heading';
import Header from '../containers/Header';
import Featured from '../containers/Featured';
import { Properties } from '../components/Properties';

const HomePage = () => {
  return (
    <>
      <Header />
      <HomeContainer>
        <Featured />
        <H level={4}>Browse by property type</H>
        <Properties />
        <H level={4}>Homes guests love</H>
        {/* <FeaturedProperties/> */}
        {/* <MailList/> */}
        {/* <Footer/> */}
      </HomeContainer>
    </>
  );
};

export default HomePage;

const HomeContainer = styled(Container)`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
