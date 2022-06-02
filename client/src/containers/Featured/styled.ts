import styled from 'styled-components';

export const Item = styled.div`
  cursor: pointer;
  width: 215px;
  height: 270px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.8);
  border: var(--border);
  transition: all 0.5s;

  > img {
    width: 100%;
    height: 80%;
    border-radius: 10px;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.6);

    > img {
      transform: scale(1.1);
    }
  }
`;

export const Titles = styled.div`
  color: #023f76;
  letter-spacing: 0.015em;
  font-family: var(--ff-secondary);

  transition: color ease var(--animation-duration);

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
