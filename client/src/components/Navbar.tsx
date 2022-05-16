import styled from 'styled-components';
import { Logo } from './Logo';
import { BtnContainer } from './Button';
import { Container } from '../styles';

import ListMenu from '../containers/List';

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
        <ListMenu />
      </ListContainer>
    </Nav>
  );
};

const Nav = styled.nav`
  background-color: var(--c-4);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 15px;
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
  &&& {
    margin-left: 20px;
  }
`;
