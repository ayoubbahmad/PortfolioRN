import useTheme from 'hooks/useTheme';
import { StyleSheet } from 'react-native';

import { store } from '../../App';

// export type IStyleSheetFactoryProps = {};

export const StyleSheetFactory = (callback: Function) => {
  const theme = useTheme();

  // const state = store.getState();
  // const theme = state?.themeProvider?.theme;

  return StyleSheet.create(callback(theme));
};

export default StyleSheetFactory;
