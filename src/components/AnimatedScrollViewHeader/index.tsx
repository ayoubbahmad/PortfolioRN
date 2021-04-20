/**
 *
 * AnimatedScrollViewHeader
 *
 */

import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
} from 'react-native-reanimated';

const myImage = require('assets/images/primary_big_image.jpg');

export const AnimatedScrollViewHeader: React.NamedExoticComponent<IAnimatedScrollViewHeaderProps> = memo(
  (props) => {
    const { headerHeight, scrollYOffset } = props;
    const ImageStyle = useAnimatedStyle(() => {
      return {
        height: interpolate(
          scrollYOffset.value,
          [-1000, 0],
          [headerHeight + 1000, headerHeight],
          Extrapolate.CLAMP,
        ),
        transform: [
          {
            translateY: interpolate(
              scrollYOffset.value,
              [0, headerHeight],
              [0, -headerHeight],
              Extrapolate.CLAMP,
            ),
          },
        ],
      };
    });

    const headerStyle = useAnimatedStyle(() => {
      return {
        backgroundColor: interpolateColor(
          scrollYOffset.value,
          [0, headerHeight],
          ['#FFFFFF00', '#FFF'],
        ),
      };
    });

    return (
      <>
        <Animated.View style={[styles.navigationHeader, headerStyle]} />
        <Animated.Image source={myImage} style={[styles.image, ImageStyle]} />
      </>
    );
  },
);

const styles = StyleSheet.create({
  image: {
    width: '100%',
    resizeMode: 'cover',
  },
  navigationHeader: {
    height: 50,
    width: '100%',
    position: 'absolute',
    zIndex: 2,
  },
});

export interface IAnimatedScrollViewHeaderProps {
  headerHeight: number;
  scrollYOffset: Animated.SharedValue<number>;
}
export default AnimatedScrollViewHeader;
