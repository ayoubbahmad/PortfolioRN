import React from 'react';
import { View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from 'screens/HomeScreen';
import ProjectsScreen from 'screens/ProjectsScreen';

export type IDrawerNavigatorProps = {};

const Drawer = createDrawerNavigator();

const DrawerNavigator: React.FC<IDrawerNavigatorProps> = ({}) => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="ProjectsScreen" component={ProjectsScreen} />
    </Drawer.Navigator>
  );
};

export { DrawerNavigator };
