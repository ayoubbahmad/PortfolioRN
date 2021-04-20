import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

import HomeScreen from 'screens/HomeScreen';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
      headerMode="float">
      {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}
