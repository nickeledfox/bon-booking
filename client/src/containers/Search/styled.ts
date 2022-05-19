import styled from 'styled-components';
import { BtnContainer } from '../../components/Button';
import { DateRange } from 'react-date-range';
import { Container } from '../../styles';

export const SearchContainer = styled(Container)`
  margin-top: 36px;
  display: flex;
  justify-content: center;
  background: red;
  padding: 30px 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(2px);
  border-radius: 12px;
  box-shadow: 64.0184px 76.8221px 80px rgba(0, 0, 0, 0.07),
    41.4934px 49.7921px 46.8519px rgba(0, 0, 0, 0.0531481),
    24.659px 29.5907px 25.4815px rgba(0, 0, 0, 0.0425185),
    12.8037px 15.3644px 13px rgba(0, 0, 0, 0.035),
    5.21632px 6.25958px 6.51852px rgba(0, 0, 0, 0.0274815),
    1.18553px 1.42263px 3.14815px rgba(0, 0, 0, 0.0168519);
`;

export const SearchBar = styled.div`
  background: #fff;
  border: 3px solid #fff;
  padding: 0;
  border-radius: var(--border-radius);
  position: relative;
  box-shadow: rgb(51 51 51 / 10%) 0px 8px 10px 0px;
  width: 80%;

  display: grid;
  gap: 10px;
  grid-template-columns: 30% 40% 30%;
`;

export const SearchItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: #3e4958;
  padding: 1.2rem;
  transition: color ease var(--animation-duration);

  &:hover {
    color: var(--c-5);
  }
`;

export const SearchText = styled.span`
  cursor: pointer;
`;

export const SearchBtn = styled(BtnContainer)`
  padding-left: 62px;
  padding-right: 62px;
  margin-left: 20px;
`;

export const StyledDateRange = styled(DateRange)`
  position: absolute;
  top: 70px;
  z-index: 2;
  box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.4);
`;

export const Options = styled.div`
  z-index: 2;
  position: absolute;
  top: 70px;
  background-color: white;
  color: #1d2429; // this is the color used in DateRange
  box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.4);
`;

export const OptionItem = styled.div`
  width: 220px;
  margin: 10px;
  display: grid;
  justify-content: space-between;
  grid-template-columns: 70px 50px 30px 30px;
  font-size: 14px;
`;

export const OptionCounter = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: 50px 30px 30px;
`;
