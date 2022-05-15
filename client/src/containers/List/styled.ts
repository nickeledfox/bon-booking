import styled, { css } from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 40px;
  margin: 20px 0;
  padding-left: 0;
`;

export const ListItem = styled.li<{ active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;

  ${(props) =>
    props.active
      ? css`
          border: 1px solid white;
          padding: 10px;
          border-radius: 20px;
        `
      : 'none'}
`;
