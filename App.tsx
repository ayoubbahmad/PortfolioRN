import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { LanguageProvider } from 'providers/LanguageProvider';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import ThemeProvider from 'providers/ThemeProvider';
import AlertsProvider from 'providers/AlertsProvider';

import { App } from 'containers/App';
import configureStore from './src/configureStore';

import { useReduxDevToolsExtension } from '@react-navigation/devtools';
import { useColorScheme } from 'react-native';

export type IAppProps = {};

const initialState = {};
const store = configureStore(initialState);

export const app: React.FC<IAppProps> = () => {
  // const navigationRef = React.useRef();
  const scheme = useColorScheme();

  return (
    <Provider store={store}>
      <LanguageProvider>
        <SafeAreaProvider>
          <AlertsProvider>
            <ThemeProvider>
              <App />
            </ThemeProvider>
          </AlertsProvider>
        </SafeAreaProvider>
      </LanguageProvider>
    </Provider>
  );
};

export default app;
