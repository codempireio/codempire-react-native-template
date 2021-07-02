import styled from 'styled-components/native';

import { IScreenProps } from './screen';

import { backgroundProp, isCenteredProp } from '@styles/css';

interface IScreenContent extends IScreenProps {
  paddingTop: number;
  paddingBottom: number;
}

export const ScreenStyles = {
  Wrapper: styled.View<IScreenContent>`
    padding-top: ${({ paddingTop }) => paddingTop}px;
    padding-bottom: ${({ paddingBottom }) => paddingBottom}px;
    flex: 1;
    ${backgroundProp}
    ${isCenteredProp}
  `,
};
