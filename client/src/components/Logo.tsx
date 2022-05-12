import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as LogoSvg } from '../assets/logo.svg';
import { FlexWrapper } from '../styles';

const Logo = () => {
  return (
    <Link to='/'>
      <FlexWrapper>
        <LogoSvg />
        <LogoText>Bon Booking</LogoText>
      </FlexWrapper>
    </Link>
  );
};

const LogoText = styled.span`
  font-family: var(--ff-accent);
  font-size: 30px;
  padding: 0 10px;
`;

export default Logo;
