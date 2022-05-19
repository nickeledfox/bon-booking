import styled from 'styled-components';
import { Img } from '../styles';
import { H } from './Heading';

interface PropertyDataProps {
  id?: number;
  title: string;
  imageUrl: string;
  city: string;
  price: number;
  rating: number;
}

export const Card: React.FC<PropertyDataProps> = ({
  title,
  imageUrl,
  city,
  price,
  rating,
}) => {
  return (
    <CardContainer>
      <Image src={imageUrl} alt={title} />
      <Title level={4}>{title}</Title>
      <span>{city}</span>
      <strong>Starting from ${price}</strong>
      <Rating>
        <button>{rating}</button>
        <span>Excellent</span>
      </Rating>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  flex: 1;
  gap: 7px;
  display: flex;
  flex-direction: column;
  padding-bottom: 2.5rem;
  background: linear-gradient(
    180deg,
    rgba(0, 131, 202, 0.2) 0%,
    rgba(0, 131, 202, 0.1) 100%
  );
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: var(--border-radius);
  padding: 10px;
`;

const Image = styled(Img)`
  height: 300px;
  border-radius: 5px;
  transition: var(--transition);
`;

const Title = styled(H)`
  color: var(--c-main);
  font-weight: 900;
  margin: 5px 0 0;
`;

const Rating = styled.div`
  > button {
    background-color: var(--c-3);
    color: white;
    border: none;
    border-radius: var(--border-radius);
    padding: 3px 14px;
    font-weight: bold;
    margin: 10px 10px 10px 0;
  }
  > span {
    font-size: 14px;
  }
`;

export const BannerCard = () => {
  return (
    <CardsWrapper>
      <BannerCardContainer>
        <img src='https://thumbs.dreamstime.com/b/%D0%B3%D0%BE%D1%80%D0%BE%D0%B4-cityscape-%D1%80%D0%B5%D0%BD%D0%BE-%D0%BD%D0%B5%D0%B2%D0%B0%D0%B4%D0%B0-%D0%B7%D0%B8%D0%BC%D0%BE%D0%B9-nevada-%D0%BE%D0%B5-%D1%84%D0%B5%D0%B2%D1%80%D0%B0%D0%BB%D1%8F-%D1%81%D1%88%D0%B0-%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D1%81%D0%BA%D0%BE%D0%B9-%D0%B3%D0%BE%D1%80%D0%B8%D0%B7%D0%BE%D0%BD%D1%82-%D1%81-211958911.jpg' />
        <Titles>
          <h3>Reno</h3>
          <h4>123 properties</h4>
        </Titles>
      </BannerCardContainer>
    </CardsWrapper>
  );
};

const CardsWrapper = styled.div`
  display: flex;
  gap: 40px;
`;

const BannerCardContainer = styled.div`
  width: 180px;
  height: 250px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  background: rgba(255, 255, 255, 0.8);
  border: 2px solid #ffffff;
  box-shadow: 64.0184px 76.8221px 80px rgba(0, 0, 0, 0.07),
    41.4934px 49.7921px 46.8519px rgba(0, 0, 0, 0.0531481),
    24.659px 29.5907px 25.4815px rgba(0, 0, 0, 0.0425185),
    12.8037px 15.3644px 13px rgba(0, 0, 0, 0.035),
    5.21632px 6.25958px 6.51852px rgba(0, 0, 0, 0.0274815),
    1.18553px 1.42263px 3.14815px rgba(0, 0, 0, 0.0168519);
  border-radius: 12px;

  > img {
    width: 100%;
    height: 80%;
    border-radius: 10px;
  }
`;

const Titles = styled.div`
  color: #023f76;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 0.015em;

  > h3 {
    margin: 0;
    padding: 10px 0 0 0;
    font-weight: 500;
  }
  > h4 {
    margin: 0;
    padding: 0;
    font-weight: 300;
  }
`;
