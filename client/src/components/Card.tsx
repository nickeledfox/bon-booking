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
