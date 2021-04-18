import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import { HomeScreen } from 'screens/HomeScreen';
import Params from 'screens/Params';
import { DetailsScreen } from 'screens/DetailsScreen';

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
      <Stack.Screen name="Home" component={HomeScreen} />
      {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
      <Stack.Screen name="Settings" component={Params} />
    </Stack.Navigator>
  );
}
