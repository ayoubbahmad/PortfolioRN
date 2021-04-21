import { useTheme } from 'hooks/useTheme';
import { StyleSheet } from 'react-native';

export const useStyleSheetFactory = (callback: (theme: any) => any) => {
  const theme = useTheme();
  return StyleSheet.create(callback(theme));
};

export const createStyle: (styles: StyleSheet.NamedStyles<any>) => any = (
  styles,
) => ({
  ...styles,
});

export default useStyleSheetFactory;
