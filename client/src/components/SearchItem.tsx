import styled from 'styled-components';
import { H } from './Heading';

export const SearchItem = () => {
  return (
    <SearchItemWrapper>
      <ItemCard>
        <Image
          src='https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
          alt=''
        />
        <Description>
          <ItemTitle level={4}>Tower Street Apartments</ItemTitle>
          <span>500m from center</span>
          <TaxiOption>Free airport taxi</TaxiOption>
          <strong>Studio Apartment with Air conditioning</strong>
          <span>Entire studio • 1 bathroom • 21m² 1 full bed</span>
          <CancelOptions>Free cancellation </CancelOptions>
          <span>You can cancel later, so lock in this great price today!</span>
        </Description>
        <Details>
          <Rating>
            <strong>Excellent</strong>
            <button>8.9</button>
          </Rating>
          <DetailText>
            <span>$112</span>
            <span>Includes taxes and fees</span>
            <button>See availability</button>
          </DetailText>
        </Details>
      </ItemCard>
    </SearchItemWrapper>
  );
};

const SearchItemWrapper = styled.div`
  border-radius: 5px;
  border: 5px solid transparent;
  background: linear-gradient(
      180deg,
      #0083ca 0%,
      rgba(0, 131, 202, 0.4) 0.01%,
      rgba(0, 131, 202, 0.21) 100%
    )
    border-box;
  margin-bottom: 20px;
`;

const ItemCard = styled.div`
  padding: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  position: relative;
  background-color: #fff;
  font-size: 12px;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 2;
`;

const Details = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const DetailText = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: 5px;

  & :first-child {
    font-size: 24px;
  }

  & :nth-child(2) {
    color: var(--c-font4);
  }

  button {
    background-color: var(--c-7);
    color: white;
    font-weight: bold;
    font-size: 16px;
    padding: 10px 5px;
    border: none;
    border-radius: 5px;
  }
`;

const ItemTitle = styled(H)`
  color: var(--c-7);
  margin: 0;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
`;

const TaxiOption = styled.span`
  background-color: var(--c-6);
  color: white;
  width: max-content;
  padding: 3px 5px;
  border-radius: 5px;
`;

const CancelOptions = styled.span`
  color: var(--c-6);
  font-weight: bold;
`;

const Rating = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  button {
    background-color: var(--c-3);
    color: white;
    padding: 5px 12px;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    margin-left: 12px;
  }
`;
