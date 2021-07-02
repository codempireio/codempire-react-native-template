import React, { FC } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

import { ICONS } from './icon.constants';

import { COLORS, TColorNames } from '@styles/colors';
import { IconStyles } from './icon.styles';

export type TIconNames = keyof typeof ICONS;

export interface IIconProps {
  type: TIconNames;

  iconColor?: TColorNames;
  size?: number;
  width?: number;
  height?: number;
  style?: StyleProp<ViewStyle>;
}

export const Icon: FC<IIconProps> = (props) => {
  const { type, height, width, size, style, iconColor } = props;

  const Image = ICONS[type];

  const imageHeight = height ?? size;
  const imageWidth = width ?? size;

  return (
    <IconStyles.Wrapper
      style={[
        {
          height: imageHeight,
          width: imageWidth,
        },
        style,
      ]}
    >
      <Image
        height={imageHeight}
        width={imageWidth}
        style={{ color: iconColor && COLORS[iconColor] }}
      />
    </IconStyles.Wrapper>
  );
};
