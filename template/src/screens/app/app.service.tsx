import { NavigationContainer } from '@react-navigation/native';
import React, { FC } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export const AppService: FC = ({ children }) => (
  <NavigationContainer>
    <SafeAreaProvider>{children}</SafeAreaProvider>
  </NavigationContainer>
);
