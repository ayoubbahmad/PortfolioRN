/**
 *
 * AnimatedScrollViewHeader
 *
 */

import { DrawerActions, useNavigation } from '@react-navigation/core';
import useTheme from 'hooks/useTheme';
import React from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Icon from 'react-native-vector-icons/Feather'; // menu : {Feather, Ionicons}
import { makeStyleSheet } from 'utils/makeStyleSheet';

const myImage = require('assets/images/primary_big_image.jpg');

export const AnimatedScrollViewHeader: React.FC<IAnimatedScrollViewHeaderProps> = (
  props,
) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const { colors } = useTheme();
  const styles = useStyles();

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
        [`${colors.background}00`, `${colors.background}`],
      ),
    };
  });

  const openDrawer = () => navigation.dispatch(DrawerActions.openDrawer());

  return (
    <>
      <Animated.View
        style={[
          styles.navigationHeader,
          headerStyle,
          { paddingTop: insets.top },
        ]}>
        <TouchableOpacity
          style={styles.menuButtonContainer}
          onPress={openDrawer}>
          <Icon name="menu" size={24} color={colors.contrast} />
        </TouchableOpacity>
      </Animated.View>
      <Animated.Image source={myImage} style={[styles.image, ImageStyle]} />
    </>
  );
};

const useStyles = makeStyleSheet((theme) => ({
  image: {
    width: '100%',
    resizeMode: 'cover',
  },
  navigationHeader: {
    width: '100%',
    position: 'absolute',
    zIndex: 2,
  },
  menuButtonContainer: { padding: 12 },
}));

export interface IAnimatedScrollViewHeaderProps {
  headerHeight: number;
  scrollYOffset: Animated.SharedValue<number>;
}

export default AnimatedScrollViewHeader;
