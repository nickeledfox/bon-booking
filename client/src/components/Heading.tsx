import styled, { css } from 'styled-components';
import { BaseTitle } from '../styles';

interface Props {
  level?: number;
}

export const Heading = styled(BaseTitle).attrs<Props>(({ level }) => ({
  as: 'h' + level,
}))<Props>`
  font-weight: semibold;
`;

Heading.defaultProps = {
  level: 3,
};

interface HProps {
  level?: 1 | 2 | 3 | 4 | 5;
  accent?: boolean;
  center?: boolean;
  text?: string;
}

export const H = styled(Heading)(({ level }: HProps) => [
  css`
    > span.accent {
      color: var(--c-accent);
    }
    color: inherit;
  `,

  level === 1 && [
    `
  font-size: 64px;
  line-height: 60px;
  margin-bottom: 0;
  `,
  ],

  level === 2 && [
    `
  font-weight: 400;
  font-size: 48px;
  line-height: 56px;
  `,
  ],

  level === 3 && [
    `
  font-size: 37.9px;
  line-height: 40px;
  `,
  ],

  level === 4 && [
    `
  font-size: 22px;
  `,
  ],

  level === 5 && [
    `
  font-size: 16px;
  `,
  ],
]);
