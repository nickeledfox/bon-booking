import { Item, Titles } from './styled';
import { Img } from '../../styles';
import { faHouseCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../../styles/style.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const categories = [
  {
    id: 1,
    title: 'Dublin',
    subtitle: '123 properties',
    imageUrl:
      'https://www.irishcentral.com/uploads/article/133960/Dublin-skyline-night-GettyImages-816502328.jpg?t=1563976596',
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
    title: 'San Francisco',
    subtitle: '231 properties',
    imageUrl:
      'https://content.r9cdn.net/rimg/dimg/69/1b/cca1e76b-city-13852-177456211cf.jpg?crop=true&width=1366&height=768&xhint=3051&yhint=1728',
  },
  {
    id: 4,
    title: 'Austin',
    subtitle: '532 properties',
    imageUrl:
      'https://scitexas.edu/wp-content/uploads/2021/07/southern-careers-instititue-campus-locations-750x500-austin-1200x800.jpg',
  },
];

export const Featured = () => {
  return (
    <Carousel
      responsive={responsive}
      infinite={false}
      keyBoardControl
      autoPlaySpeed={4000}
      draggable
      focusOnSelect={false}
    >
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
    </Carousel>
  );
};
