import { Container } from '../../styles';
import { H } from '../../components/Heading';
import { MainHeader, Div } from './styled';

import Search from '../Search';
import Featured from '../Featured';

interface HeaderProps {
  active?: any;
}

export const Header: React.FC<HeaderProps> = (props) => {
  return (
    <>
      <MainHeader>
        <Container>
          <Div>
            <H level={1}>Vacation feels like home</H>
          </Div>
          <Div>
            <H level={5} style={{ margin: '1.2rem 0 20px 0' }}>
              The most comfortable accomodation you can find in our website,
              spread all over the world!
            </H>
            <div>
              <span>Most Popular </span>
              <span>Arrow </span>
              <div>
                <Featured />
              </div>
            </div>
          </Div>
        </Container>
      </MainHeader>
      <Search />
    </>
  );
};
