import { FContainer, Item, Titles } from './styled';
import { Img } from '../../styles';
import { faHouseCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Featured = () => {
  const categories = [
    {
      id: 1,
      title: 'Dublin',
      subtitle: '123 properties',
      imageUrl:
        'https://www.delightfull.eu/blog/wp-content/uploads/2016/03/Luxury-hotel-designs-in-Dublin-and-a-few-view-about-the-city-Dublin-768x349.jpg',
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
    <>
      <FContainer as='section'>
        {categories.map((category) => (
          <Item key={category.id}>
            <Img
              src={category.imageUrl}
              alt={category.title}
              className='featuredImg'
            />
            <Titles>
              <p>{category.title}</p>
              <FontAwesomeIcon icon={faHouseCircleCheck} />
              <span>{category.subtitle}</span>
            </Titles>
          </Item>
        ))}
      </FContainer>
    </>
  );
};
