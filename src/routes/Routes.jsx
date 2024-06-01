import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import About from '../screens/About';
import TabNavigation from './MainRoutes';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator

        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="TabNav" component={TabNavigation} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
