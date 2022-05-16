import styled from 'styled-components';
import { H } from './Heading';
import Property from '../data/property-data.json';

export const Properties = () => {
  return (
    <Container as='section'>
      {Property.property.map(
        (item: {
          title: string;
          subtitle: string;
          imageUrl: string;
          id: number;
        }) => (
          <Item key={item.id}>
            <Img src={item.imageUrl} />
            <Titles>
              <H level={4}>{item.title}</H>
              <H level={5}>{item.subtitle}</H>
            </Titles>
          </Item>
        )
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const Item = styled.div`
  cursor: pointer;
  flex: 1;
  border-radius: var(--border-radius);
  overflow: hidden;
  background: #fff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const Img = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const Titles = styled.div`
  padding: 0 10px;
  margin-top: -10px;
  > h4 {
    font-size: 18px;
    color: var(--c-main);
  }

  > h5 {
    font-size: 14px;
    font-weight: 300;
  }
`;
