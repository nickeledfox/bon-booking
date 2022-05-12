import styled from 'styled-components';
import { BtnContainer } from '../../components/Button';
import { DateRange } from 'react-date-range';

export const SearchContainer = styled.div`
  height: 32px;
  background: white;
  border: 3px solid rgb(239, 242, 247);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  border-radius: 5px;
  width: 100%;
  max-width: 1260px;
  z-index: 20;
  position: relative;
  margin: 0 auto;
  margin-top: 30px;
`;

export const SearchItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: lightgray;
`;

export const SearchText = styled.span`
  cursor: pointer;
`;

export const SearchBtn = styled(BtnContainer)`
  padding: 12px 62px;
`;

export const StyledDateRange = styled(DateRange)`
  position: absolute;
  top: 52px;
  z-index: 2;
`;
