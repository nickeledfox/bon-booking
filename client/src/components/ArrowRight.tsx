import styled from 'styled-components';

export const ArrowRight = () => {
  return (
    <ArrowSvg>
      <svg
        width='32'
        height='32'
        viewBox='0 0 32 32'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M16 29.3333C23.3638 29.3333 29.3333 23.3638 29.3333 16C29.3333 8.6362 23.3638 2.66667 16 2.66667C8.6362 2.66667 2.66666 8.6362 2.66666 16C2.66666 23.3638 8.6362 29.3333 16 29.3333Z'
          stroke='white'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M16 21.3333L21.3333 16L16 10.6667'
          stroke='white'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M10.6667 16H21.3333'
          stroke='white'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </ArrowSvg>
  );
};

const ArrowSvg = styled.span`
  cursor: pointer;
  transition: var(--animation-duration);

  &:hover {
    > svg {
      fill: var(--c-ghost);
    }
  }
`;
