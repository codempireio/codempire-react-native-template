import { css } from 'styled-components';

import { COLORS, TColorNames } from './colors';

export const backgroundProp = css<{ background?: TColorNames }>`
  ${({ background }) => background && `background-color: ${COLORS[background]}`}
`;

export const isCenteredProp = css<{ isCentered?: boolean }>`
  ${({ isCentered }) =>
    isCentered &&
    ` justify-content: center;
      align-items: center;
    `}
`;
