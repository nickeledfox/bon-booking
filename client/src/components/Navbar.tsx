import styled from 'styled-components';
import { Logo } from './Logo';
import { BtnContainer } from './Button';
import { Container } from '../styles';
import { NavList } from './NavList';

export const Navbar: React.FC = () => {
  return (
    <Nav>
      <NavContainer>
        <Logo />
        <div>
          <NavButton color='primary'>Login</NavButton>
          <NavButton color='secondary'>Register</NavButton>
        </div>
      </NavContainer>
      <ListContainer>
        <NavList />
      </ListContainer>
    </Nav>
  );
};

const Nav = styled.nav`
  font-family: 'Raleway';
  background: linear-gradient(
    180deg,
    rgba(20, 20, 20, 1) 0%,
    rgba(20, 20, 20, 0) 100%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 0;
  color: #fff;
`;

const NavContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ListContainer = styled(Container)`
  width: 100%;
`;

const NavButton = styled(BtnContainer)`
  margin-left: 20px;
  border-radius: 5px;
`;
