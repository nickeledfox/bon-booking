import { Wrapper } from './styled';
import PropertyData from '../../data/property-data.json';
import { Card } from '../../components/Card';

export const Properties = () => {
  return (
    <Wrapper>
      {PropertyData.property.map((property) => (
        <Card
          key={property.id}
          title={property.title}
          imageUrl={property.imageUrl}
          city={property.city}
          price={property.price}
          rating={property.rating}
        ></Card>
      ))}
    </Wrapper>
  );
};
