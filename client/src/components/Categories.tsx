import styled from 'styled-components';
import { H } from './Heading';
import PropertyType from '../data/property-categories.json';

export const Categories = () => {
  return (
    <Container as='section'>
      {PropertyType.property.map(
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
  border-radius: var(--border-radius2);
  overflow: hidden;
`;

const Img = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const Titles = styled.div`
  margin-top: -20px;
  > h4 {
    font-size: 18px;
    color: var(--c-main);
    margin-bottom: 0;
  }

  > h5 {
    font-size: 14px;
    font-weight: 300;
    margin-top: 0.5rem;
  }
`;
