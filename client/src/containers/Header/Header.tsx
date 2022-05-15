import { Container } from '../../styles';
import { H } from '../../components/Heading';
import { MainHeader, Div, Btn } from './styled';

import Search from '../Search';

interface HeaderProps {
  active?: any;
}

export const Header: React.FC<HeaderProps> = (props) => {
  return (
    <>
      <MainHeader>
        <Container>
          <Div>
            <H level={1}>
              <span className='accent'>
                A lifetime of discounts? It's Genius.
              </span>
            </H>
          </Div>
          <Div>
            <H level={4} style={{ margin: '1.2rem 0 8rem 0' }}>
              Get rewarded for your travels – unlock instant savings of 10% or
              more with a free Bon Booking account!
            </H>
          </Div>
        </Container>
      </MainHeader>
      <Search />
    </>
  );
};
