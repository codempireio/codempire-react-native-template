import React, { useEffect, useRef } from 'react';
import { Animated, Image } from 'react-native';

import { Icon } from '@components/icon';
import { Screen } from '@components/screen';

import { IMAGES } from '@constants/images';

import { TemplateStyles } from './template.styles';

const TIME = 1000;

export const Template = () => {
  const scale = useRef(new Animated.Value(0.6)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scale, {
          toValue: 1,
          useNativeDriver: true,
          duration: TIME,
        }),
        Animated.timing(scale, {
          toValue: 0.6,
          useNativeDriver: true,
          duration: TIME,
        }),
      ])
    ).start();
  }, [scale]);

  return (
    <Screen isCentered background="white">
      <TemplateStyles.ImageWrapper>
        <Image source={IMAGES.codempire} />
      </TemplateStyles.ImageWrapper>
      <Animated.View style={{ transform: [{ scale }] }}>
        <Icon type="heart" iconColor="red" size={30} />
      </Animated.View>
    </Screen>
  );
};
