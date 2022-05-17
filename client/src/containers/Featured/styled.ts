import styled from 'styled-components';
import { Container } from '../../styles';

export const FContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  z-index: 1;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

export const Item = styled.div`
  position: relative;
  color: white;
  border-radius: var(--border-radius2);
  overflow: hidden;
  height: 250px;
  flex: 1;
  text-shadow: 1px 1px 2px rgb(21, 20, 20), 0 0 1em rgba(65, 65, 66, 0.649),
    0 0 0.2em rgba(93, 93, 95, 0.603);
`;

export const Titles = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;

  > h3 {
    margin-bottom: 0;
  }
  > h4 {
    margin-top: 0;
  }
`;
