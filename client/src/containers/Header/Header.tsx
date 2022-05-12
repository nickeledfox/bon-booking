import { Container } from '../../styles';
import { H } from '../../components/Heading';
import { MainHeader, Div, Btn } from './styled';

import Search from '../Search/Search';

interface HeaderProps {
  active?: any;
}

const Header: React.FC<HeaderProps> = (props) => {
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
            <H level={3} style={{ marginTop: '1.2rem' }}>
              Get rewarded for your travels – unlock instant savings of 10% or
              more with a free Bon Booking account
            </H>
            <Btn color='primary'>Sign in / Register</Btn>
          </Div>
        </Container>
      </MainHeader>
      <Search />
    </>
  );
};

export default Header;
