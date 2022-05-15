import { FContainer, Item, Img, Titles } from './styled';
import { H } from '../../components/Heading';

export const Featured = () => {
  return (
    <FContainer>
      <Item>
        <Img
          src='https://media.cntraveller.com/photos/611bf0fb7048754865719e3a/16:9/w_2580,c_limit/view-of-the-liffey-from-liberty-hall-dublin-ireland-conde-nast-traveller-4feb16-Tara-Morgan.jpg'
          alt=''
          className='featuredImg'
        />
        <Titles>
          <H>Dublin</H>
          <H level={4}>123 properties</H>
        </Titles>
      </Item>

      <Item>
        <Img
          src='https://a.cdn-hotels.com/gdcs/production13/d1234/06840187-b989-4343-856c-a42990f9fe32.jpg'
          alt=''
          className='featuredImg'
        />
        <Titles>
          <H>Reno</H>
          <H level={4}>533 properties</H>
        </Titles>
      </Item>

      <Item>
        <Img
          src='https://scitexas.edu/wp-content/uploads/2021/07/southern-careers-instititue-campus-locations-750x500-austin-1200x800.jpg'
          alt=''
          className='featuredImg'
        />
        <Titles>
          <H>Austin</H>
          <H level={4}>532 properties</H>
        </Titles>
      </Item>
    </FContainer>
  );
};
