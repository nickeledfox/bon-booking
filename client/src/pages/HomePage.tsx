import styled from 'styled-components';
import Header from '../containers/Header';

const HomePage = () => {
  return (
    <>
      <Header />
    </>
  );
};

export default HomePage;

const HomeContainer = styled.div`
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
