import styled, { css } from 'styled-components';

type ButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  color?: 'primary' | 'secondary' | 'bordered' | 'dark';
};

export const Button = ({ onClick, children, color }: ButtonProps) => {
  return (
    <BtnContainer onClick={onClick} color={color}>
      {children}
    </BtnContainer>
  );
};

export const BtnContainer = styled.button<ButtonProps>`
  cursor: pointer;
  color: #fff;
  padding: 10px 25px;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  font-weight: 400;
  font-size: 16px;
  transition: all var(--animation-timing) var(--animation-duration);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  }
  &:active {
    transform: translateY(1px);
  }

  ${(props) => props.color && COLOR[props.color]};
`;

const COLOR = {
  primary: css`
    background: var(--c-accent);

    &:hover {
      background-color: var(--c-3);
    }
  `,
  secondary: css`
    background-color: transparent;
    border-color: #fff;

    &:hover {
      color: var(--c-accent);
      border-color: var(--c-accent);
    }
  `,
  bordered: css`
    background: transparent;
    border-color: #fff;

    &:hover {
      background: var(--c-accent);
      border-color: var(--c-accent);
    }
  `,
  dark: css`
    background: var(--c-4);
    border-color: var(--c-4);

    &:hover {
      background: #01429c;
      border-color: #01429c;
    }
  `,
};
