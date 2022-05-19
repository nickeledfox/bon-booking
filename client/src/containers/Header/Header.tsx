import { Container } from '../../styles';
import { H } from '../../components/Heading';
import { MainHeader, Div } from './styled';

import Search from '../Search';
import { BannerCard } from '../../components/Card';

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
              Vacation feels <span className='accent'> like</span> home
            </H>
          </Div>
          <Div>
            <H level={4} style={{ margin: '1.2rem 0 20px 0' }}>
              The most comfortable accomodation you can find in our website,
              spread all over the world!
            </H>
          </Div>
          <BannerCard />
        </Container>
      </MainHeader>
      <Search />
    </>
  );
};
