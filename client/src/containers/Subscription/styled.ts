import styled from 'styled-components';
import { BtnContainer } from '../../components/Button';
import { H } from '../../components/Heading';

export const Wrapper = styled.section`
  width: 100%;
  margin: 50px 0;
  background-color: #00224f;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding-bottom: 50px;
  padding: 20px 0 70px 0;

  input {
    width: 300px;
    height: 30px;
    padding: 10px;
    margin-right: 10px;
  }
`;

export const Btn = styled(BtnContainer)`
  padding: 15px 20px;
`;

export const Title = styled(H)`
  margin-bottom: 0;
`;

export const SubTitle = styled.span`
  margin-bottom: 15px;
  opacity: 0.5;
`;
