import { FContainer, Item, Titles } from './styled';
import { Img } from '../../styles';
import { H } from '../../components/Heading';

export const Featured = () => {
  const categories = [
    {
      id: 1,
      title: 'Dublin',
      subtitle: '123 properties',
      imageUrl:
        'https://media.cntraveller.com/photos/611bf0fb7048754865719e3a/16:9/w_2580,c_limit/view-of-the-liffey-from-liberty-hall-dublin-ireland-conde-nast-traveller-4feb16-Tara-Morgan.jpg',
    },
    {
      id: 2,
      title: 'Reno',
      subtitle: '533 properties',
      imageUrl:
        'https://a.cdn-hotels.com/gdcs/production13/d1234/06840187-b989-4343-856c-a42990f9fe32.jpg',
    },
    {
      id: 3,
      title: 'Austin',
      subtitle: '532 properties',
      imageUrl:
        'https://scitexas.edu/wp-content/uploads/2021/07/southern-careers-instititue-campus-locations-750x500-austin-1200x800.jpg',
    },
  ];
  return (
    <FContainer as='section'>
      {categories.map((category) => (
        <Item key={category.id}>
          <Img
            src={category.imageUrl}
            alt={category.title}
            className='featuredImg'
          />
          <Titles>
            <H>{category.title}</H>
            <H level={4}>{category.subtitle}</H>
          </Titles>
        </Item>
      ))}
    </FContainer>
  );
};
