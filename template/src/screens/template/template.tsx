import React, { useEffect, useRef } from 'react';
import { Animated, Image, Text } from 'react-native';

import { Icon } from '@components/icon';
import { Screen } from '@components/screen';

import { WELCOME } from '@constants/config';
import { IMAGES } from '@constants/images';

import { TemplateStyles } from './template.styles';

const TIME = 1000;

export const Template = () => {
  const scale = useRef(new Animated.Value(0.6));

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scale.current, {
          toValue: 1,
          useNativeDriver: true,
          duration: TIME,
        }),
        Animated.timing(scale.current, {
          toValue: 0.6,
          useNativeDriver: true,
          duration: TIME,
        }),
      ])
    ).start();
  }, [scale]);

  return (
    <Screen isCentered background="white">
      <Text>{WELCOME}</Text>
      <TemplateStyles.ImageWrapper>
        <Image source={IMAGES.codempire} />
      </TemplateStyles.ImageWrapper>
      <Animated.View style={{ transform: [{ scale: scale.current }] }}>
        <Icon type="heart" iconColor="red" size={30} />
      </Animated.View>
    </Screen>
  );
};
