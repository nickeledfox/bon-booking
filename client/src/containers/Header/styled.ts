import styled, { css } from 'styled-components';
import { Container } from '../../styles';
import { BtnContainer } from '../../components/Button';

export const MainHeader = styled.header`
  background-color: var(--c-4);
  color: #fff;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const HContainer = styled(Container)`
  margin: 20px 0px 100px 0px;
`;

export const HContainerListMode = styled.ul`
  margin: 20px 0px 0px 0px;
`;

export const Div = styled.div`
  width: 60%;
`;

export const Btn = styled(BtnContainer)`
  &&& {
    padding: 20px 50px;
    margin-bottom: 60px;
    font-size: 1.8rem;
  }
`;
