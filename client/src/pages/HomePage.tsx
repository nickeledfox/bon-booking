import styled from 'styled-components';
import { Container } from '../styles';
import Header from '../containers/Header';
import Featured from '../containers/Featured';

const HomePage = () => {
  return (
    <>
      <Header />
      <HomeContainer as='section'>
        <Featured />
        <h1 className='homeTitle'>Browse by property type</h1>
        {/* <PropertyList/> */}
        <h1 className='homeTitle'>Homes guests love</h1>
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
  align-items: center;
  gap: 30px;
`;

const HomeTitle = styled.span`
  width: 1024px;
  font-size: 20px;
`;
