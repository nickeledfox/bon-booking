import styled, { css } from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 20px;
  margin: 20px 0;
  padding-left: 0;
`;

export const ListItem = styled.li<{ active?: boolean }>`
  cursor: pointer;
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  padding: 10px 13px;
  gap: 10px;
  text-shadow: 2px 8px 6px rgba(0, 0, 0, 0.2),
    0px -5px 35px rgba(255, 255, 255, 0.3);

  &:hover {
    background-color: var(--c-ghost);
    backdrop-filter: blur(5px);
    padding: 10px 13px;
    border-radius: 30px;
  }

  ${(props) =>
    props.active
      ? css`
          border: var(--border);
          padding: 10px 13px;
          border-radius: 30px;
          background-color: var(--c-ghost);
          backdrop-filter: blur(5px);
        `
      : 'none'}
`;
