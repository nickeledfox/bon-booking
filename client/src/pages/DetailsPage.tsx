import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { SetStateAction, useState } from 'react';

import '../styles/style.css';
import { Container } from '../styles';
import { BtnContainer, Button } from '../components/Button';
import { H } from '../components/Heading';

export const DetailsPage = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1',
    },
  ];

  const handleOpen = (i: SetStateAction<number>) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction: string) => {
    let newSlideNumber;

    if (direction === 'l') {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <div>
      <PageContainer>
        {open && (
          <div className='slider'>
            <FontAwesomeIcon
              icon={faCircleXmark}
              className='close'
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className='arrow'
              onClick={() => handleMove('l')}
            />
            <div className='sliderWrapper'>
              <img src={photos[slideNumber].src} alt='' className='sliderImg' />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className='arrow'
              onClick={() => handleMove('r')}
            />
          </div>
        )}
        <PropertyWrapper>
          <BookingBtn color='booking'>Reserve or Book Now!</BookingBtn>
          <H>Tower Street Apartments</H>
          <PropertyAddress>
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New york</span>
          </PropertyAddress>
          <span style={{ color: '#0071c2' }}>
            Excellent location – 500m from center
          </span>
          <span style={{ color: '#008009' }}>
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <ImagesWrapper>
            {photos.map((photo, i) => (
              <div style={{ width: '33%' }} key={i}>
                <PropertyImage
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=''
                />
              </div>
            ))}
          </ImagesWrapper>
          <PropertyDetails>
            <div style={{ flex: '3' }}>
              <h1 style={{ fontSize: '24px' }}>Stay in the heart of City</h1>
              <PropertyDescription>
                Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                Street Apartments has accommodations with air conditioning and
                free WiFi. The units come with hardwood floors and feature a
                fully equipped kitchenette with a microwave, a flat-screen TV,
                and a private bathroom with shower and a hairdryer. A fridge is
                also offered, as well as an electric tea pot and a coffee
                machine. Popular points of interest near the apartment include
                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                airport is John Paul II International Kraków–Balice, 16.1 km
                from Tower Street Apartments, and the property offers a paid
                airport shuttle service.
              </PropertyDescription>
            </div>
            <PropertyPrice>
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <Button color='booking'>Reserve or Book Now!</Button>
            </PropertyPrice>
          </PropertyDetails>
        </PropertyWrapper>
      </PageContainer>
    </div>
  );
};

const PageContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 13rem;
  gap: 10px;
  position: relative;
`;

const PropertyWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;

  span {
    font-weight: 500;
  }
`;

const BookingBtn = styled(BtnContainer)`
  position: absolute;
  top: 0;
  right: 0;
`;

const PropertyAddress = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ImagesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const PropertyImage = styled.img`
  width: 100%;
  object-fit: cover;
  cursor: pointer;
`;

const PropertyDetails = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;
`;

const PropertyDescription = styled.p`
  font-size: 14px;
  margin-top: 20px;
`;
const PropertyPrice = styled.div`
  flex: 1;
  background-color: #ebf3ff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  h1 {
    font-size: 18px;
    color: #555;
  }

  span {
    font-size: 14px;
  }

  h2 {
    font-weight: 300;
  }
`;
