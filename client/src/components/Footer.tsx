import styled, { css } from 'styled-components';
import { Container } from '../styles';
import '../styles/style.css';

import links from '../data/footer-links.json';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        {links.map((item) => (
          <Col key={item.id}>
            {item.links.map((link) => (
              <StyledLink to={link.path} key={link.name} className='fListItem'>
                {link.name}
              </StyledLink>
            ))}
          </Col>
        ))}
      </FooterContainer>
      <Copyright>Copyright © 2022 Bon Booking. All rights reserved.</Copyright>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  width: 100%;
  font-size: 12px;
`;

const FooterContainer = styled(Container)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`;

const Col = styled.div`
  padding: 0;
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled(Link)`
  margin-bottom: 10px;
  color: var(--c-1);
  font-family: var(--ff-secondary);
`;

const Copyright = styled.p`
  text-align: center;
`;
