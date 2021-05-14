import { useSelector } from 'react-redux';
import { colors as constColors, fontSizes } from 'theme';

const space = [0, 4, 8, 16, 32, 64, 128, 256, 512];

const fontWeights = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const width = [16, 32, 64, 128, 256];
const heights = [16, 32, 64, 128, 256];

// this one if for responsive layouts
const breakpoints = {
  xs: '0',
  sm: '600px',
  md: '960px',
  lg: '1280px',
  xl: '1920px',
};

export const useTheme = () => {
  const theme = useSelector((store: any) => store?.themeProvider?.theme);

  let colors = constColors(theme);

  return { colors, space, fontSizes, fontWeights, width, heights };
};

export default useTheme;
