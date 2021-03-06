import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as LogoSvg } from '../assets/logo.svg';
import { FlexWrapper } from '../styles';

export const Logo = () => {
  return (
    <Link to='/'>
      <FlexWrapper>
        <LogoSvg style={{ zIndex: '10' }} />
        <LogoText>Bon Booking</LogoText>
      </FlexWrapper>
    </Link>
  );
};

const LogoText = styled.span`
  font-family: var(--ff-accent);
  font-size: 30px;
  padding: 0 10px;
  z-index: 10;
`;
