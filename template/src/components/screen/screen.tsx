import React, { FC } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { TColorNames } from '@styles/colors';
import { ScreenStyles } from './screen.styles';

export interface IScreenProps {
  background?: TColorNames;
  isCentered?: boolean;
}

export const Screen: FC<IScreenProps> = ({ children, ...props }) => {
  const { bottom, top } = useSafeAreaInsets();

  return (
    <ScreenStyles.Wrapper {...props} paddingTop={top} paddingBottom={bottom}>
      {children}
    </ScreenStyles.Wrapper>
  );
};
