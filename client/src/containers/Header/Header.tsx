import { Container } from '../../styles';
import { H } from '../../components/Heading';
import { MainHeader, Div, Slider, SliderHeader, Heading } from './styled';

import Search from '../Search';
import Featured from '../Featured';
import { ArrowRight } from '../../components/ArrowRight';

interface HeaderProps {
  active?: boolean;
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
            <Slider>
              <SliderHeader>
                <Heading>Most Popular</Heading>
                <ArrowRight />
              </SliderHeader>
              <Featured />
            </Slider>
          </Div>
        </Container>
      </MainHeader>
      <Search />
    </>
  );
};
