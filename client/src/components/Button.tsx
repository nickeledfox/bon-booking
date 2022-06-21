import styled, { css } from 'styled-components';

type ButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  color?: 'primary' | 'secondary' | 'bordered' | 'muted' | 'booking';
  disabled?: boolean;
};

export const Button = ({ onClick, children, color, disabled }: ButtonProps) => {
  return (
    <BtnContainer onClick={onClick} color={color} disabled={disabled}>
      {children}
    </BtnContainer>
  );
};

export const BtnContainer = styled.button<ButtonProps>`
  position: relative;
  z-index: 10;
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
  ${(props) =>
    props.disabled &&
    css`
      pointer-events: none;
      opacity: 0.5;
    `};
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

  muted: css`
    background: #e7ac72;
    border-color: #e7ac72;

    &:hover {
      background: #e7a15b;
      border-color: #e7a15b;
    }
  `,

  booking: css`
    background: var(--c-7);
    border-color: var(--c-7);
    box-shadow: none;
    font-weight: bold;
    border-radius: 5px;

    &:hover {
      background: #0163a9;
      border-color: #0163a9;
    }
  `,
};

export const CounterBtn = styled.button<ButtonProps>`
  color: var(--c-5);
  background: #fff;
  width: 30px;
  height: 30px;
  border: 1px solid var(--c-5);
  border-radius: 1px;
  padding: 0;

  &:hover {
    color: var(--c-4);
    border-color: var(--c-4);
  }

  ${(props) => props.color && COLOR[props.color]}
  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
      &:hover {
        color: var(--c-5);
        border-color: var(--c-5);
      }
    `};
`;
