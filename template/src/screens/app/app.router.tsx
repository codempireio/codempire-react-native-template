import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { Template } from '@screens/template';

import { ROUTES } from '@constants/routes';

const Stack = createStackNavigator();

const noHeaderScreenOptions = { headerShown: false, gestureEnabled: false };

export const AppRouter = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={noHeaderScreenOptions}
      name={ROUTES.HOME}
      component={Template}
    />
  </Stack.Navigator>
);
