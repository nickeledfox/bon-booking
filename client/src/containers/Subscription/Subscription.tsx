import { Wrapper, Title, SubTitle, Btn } from './styled';
import '../../styles/style.css';
import { Input } from '../../components/Input';

export const Subscription = () => {
  return (
    <Wrapper>
      <Title>Save time, save money!</Title>
      <SubTitle>
        Subscribe to get information, latest news and best deals from Bon
        Booking
      </SubTitle>
      <div className='mailInputContainer'>
        <Input required type='text' placeholder='Your Email' />
        <Btn color='primary'>Subscribe</Btn>
      </div>
    </Wrapper>
  );
};
