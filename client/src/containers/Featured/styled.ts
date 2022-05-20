import styled from 'styled-components';
import { Container } from '../../styles';

export const FContainer = styled(Container)`
  display: flex;
  gap: 30px;
  z-index: 1;
  margin: 0;
  padding: 0;
  overflow: hidden;
  padding-top: 30px;
`;

export const Item = styled.div`
  width: 180px;
  height: 250px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.8);
  border: 2px solid #fff;
  box-shadow: 64.0184px 76.8221px 80px rgba(0, 0, 0, 0.07),
    41.4934px 49.7921px 46.8519px rgba(0, 0, 0, 0.0531481),
    24.659px 29.5907px 25.4815px rgba(0, 0, 0, 0.0425185),
    12.8037px 15.3644px 13px rgba(0, 0, 0, 0.035),
    5.21632px 6.25958px 6.51852px rgba(0, 0, 0, 0.0274815),
    1.18553px 1.42263px 3.14815px rgba(0, 0, 0, 0.0168519);

  > img {
    width: 100%;
    height: 80%;
    border-radius: 10px;
  }
`;

export const Titles = styled.div`
  color: #023f76;
  font-weight: 500;
  letter-spacing: 0.015em;
  font: var(--ff-secondary);

  > p {
    margin: 0;
    padding: 10px 0 0 0;
    font-weight: 500;
    font-size: 20px;
  }
  > span {
    margin: 0;
    padding-left: 10px;
    font-weight: 300;
  }
  > svg {
    opacity: 0.7;
  }
`;
