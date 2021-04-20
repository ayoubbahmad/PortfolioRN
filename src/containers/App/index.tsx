import useTheme from 'hooks/useTheme';
import React from 'react';
import { StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import MyStack from 'navigators';
import { NavigationContainer } from '@react-navigation/native';

// import { changeThemeAction } from 'providers/ThemeProvider/actions';
// import ToastExample from 'components/ToastExample';
// import { ReanimatedTestComp } from 'components/ReanimatedTestComp';
import { NavigationProvider } from 'providers/NavigationProvider';
import { useReduxDevToolsExtension } from '@react-navigation/devtools';
import { navigationRef } from 'utils/rootNavigation';
import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { DrawerNavigator } from 'navigators/DrawerNavigator';

export type IAppProps = {};

const App: React.FC<IAppProps> = ({}) => {
  const { color } = useTheme();

  const theme = useSelector((store: any) => store?.themeProvider?.theme);

  useReduxDevToolsExtension(navigationRef);

  const dispatch = useDispatch();

  return (
    <>
      <NavigationContainer
        ref={navigationRef}
        theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
        <NavigationProvider>
          <DrawerNavigator />
        </NavigationProvider>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export { App };
