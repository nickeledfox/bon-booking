import styled from 'styled-components';
import { BaseTitle, Container } from '../styles';
import { BtnContainer } from './Button';
import { H } from './Heading';

import { Search, Featured } from '../containers';

interface HeaderProps {
  active?: boolean;
}

export const Hero: React.FC<HeaderProps> = (props) => {
  return (
    <>
      <MainHeader>
        <HContainer>
          <Div>
            <H level={1}>
              <span className='accent'>Vacation</span> feels like home
            </H>
          </Div>
          <Div>
            <H level={5} style={{ margin: '1.2rem 0 20px 0' }}>
              The most comfortable accomodation you can find in our website,
              spread all over the world!
            </H>
            <Slider>
              <Heading as='div'>Popular destinations</Heading>
              <Featured />
            </Slider>
          </Div>
        </HContainer>
      </MainHeader>
      <Search />
    </>
  );
};

const MainHeader = styled.header`
  color: #fff;
  display: flex;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: url('https://images.unsplash.com/photo-1539257419621-1672658884a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2233&q=80');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    filter: brightness(85%);
    top: 0;
    z-index: -1;
  }
`;

const HContainer = styled(Container)`
  margin: 15px 0px;

  > h5 {
    font-weight: 500;
    text-transform: uppercase;
  }
`;

const HContainerListMode = styled.ul`
  margin: 20px 0px 0px 0px;
`;

const Div = styled.div`
  width: 65%; // responsible for the heder slider width and spacing between slides

  > h1,
  h4 {
    text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1),
      1px 1px 1px rgba(0, 0, 0, 0.5);
  }
`;

const Btn = styled(BtnContainer)`
  &&& {
    padding: 20px 50px;
    margin-bottom: 100px;
    font-size: 1.8rem;
  }
`;

const Slider = styled.div`
  padding-top: 2.5rem;
`;

const Heading = styled(BaseTitle)`
  padding-bottom: 1rem;
  font-size: 24px;
  text-transform: uppercase;
  font-family: var(--ff-secondary);
`;
