import styled, { css } from 'styled-components';
import { Container } from '../../styles';
import { BtnContainer } from '../../components/Button';

export const MainHeader = styled.header`
  color: #fff;
  display: flex;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: url('https://images.unsplash.com/photo-1619329268107-5aba62ca4528?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2972');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    filter: brightness(85%);
    top: 0;
    z-index: -1;
  }
`;

export const HContainer = styled(Container)`
  margin: 20px 0px 100px 0px;
`;

export const HContainerListMode = styled.ul`
  margin: 20px 0px 0px 0px;
`;

export const Div = styled.div`
  width: 60%;
  text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1),
    1px 1px 1px rgba(0, 0, 0, 0.5);
`;

export const Btn = styled(BtnContainer)`
  &&& {
    padding: 20px 50px;
    margin-bottom: 100px;
    font-size: 1.8rem;
  }
`;
