import styled from 'styled-components';
import { BtnContainer } from '../../components/Button';
import { DateRange } from 'react-date-range';
import { Container } from '../../styles';

export const SearchContainer = styled(Container)`
  background: white;
  border: 3px solid #fff;
  padding: 0;
  border-radius: var(--border-radius);
  z-index: 20;
  position: relative;
  margin-top: -40px;
  box-shadow: rgb(51 51 51 / 10%) 0px 8px 10px 0px;

  display: grid;
  gap: 10px;
  grid-template-columns: 28% 32% 22% 15%;
`;

export const SearchItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  color: var(--c-main);
  padding: 1rem;
  transition: color ease var(--animation-duration);

  &:hover {
    color: var(--c-5);
  }
  &:first-child {
    margin-left: 10px;
  }
`;

export const SearchText = styled.span`
  cursor: pointer;
`;

export const SearchBtn = styled(BtnContainer)`
  padding: 12px 62px;
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
