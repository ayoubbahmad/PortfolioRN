import { useTheme } from 'hooks/useTheme';
import { StyleSheet } from 'react-native';

type callbackType = (
  theme: ReturnType<typeof useTheme>,
) => StyleSheet.NamedStyles<any>;

export const useStyleSheetFactory = (callback: callbackType) => {
  const theme = useTheme();
  return StyleSheet.create(callback(theme));
};

// export const makeStyles
/**
 * makeStyles(callback) => () => useStyleSheetFactory(callback)
 * callback((theme)=>{styles})
 */

export const makeStyleSheet = (callback: callbackType) => () =>
  useStyleSheetFactory(callback);

export default useStyleSheetFactory;
