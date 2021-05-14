/**
 *
 * HomeScreen
 *
 */

import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import makeSelectHomeScreen from './selectors';
import reducer from './reducer';
import saga from './saga';
import { FormattedMessage } from 'components/FormattedMessage';
import messages from './messages';

import { ScrollView } from 'react-native-gesture-handler';

import Animated, {
  Extrapolate,
  interpolate,
  interpolateNode,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  Value,
  withTiming,
} from 'react-native-reanimated';
import AnimatedScrollViewHeader from 'components/AnimatedScrollViewHeader';
import useTheme from 'hooks/useTheme';

const HEADER_MAX_HEIGHT = 330;
const INTRODUCTION_IMAGE_INTERSECTION = 12;

const stateSelector = createStructuredSelector({
  homeScreen: makeSelectHomeScreen(),
});

const key = 'homeScreen';

const HomeScreen: React.FC<IHomeScreenProps> = ({}) => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  /* eslint-disable no-unused-vars */
  const { homeScreen } = useSelector(stateSelector);
  const dispatch = useDispatch();
  /* eslint-enable no-unused-vars */

  const { colors } = useTheme();

  const scrollYAnimation = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event: any) => {
    scrollYAnimation.value = event.contentOffset.y;
  });

  return (
    <Animated.View style={styles.container}>
      <AnimatedScrollViewHeader
        headerHeight={HEADER_MAX_HEIGHT}
        scrollYOffset={scrollYAnimation}
      />
      <Animated.ScrollView
        scrollEventThrottle={16}
        onScroll={scrollHandler}
        contentContainerStyle={[styles.scrollViewContentContainerStyle]}
        style={StyleSheet.absoluteFill}>
        <View style={styles.hidenImageReplacer}>
          <FormattedMessage {...messages.name} />
        </View>
        <View
          style={[
            styles.introductionContainer,
            {
              backgroundColor: colors.background,
            },
          ]}>
          <FormattedMessage {...messages.introduction} />
        </View>
      </Animated.ScrollView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContentContainerStyle: {
    flex: 1,
    paddingHorizontal: 12,
  },
  scrollViewStyle: {
    flex: 1,
  },
  hidenImageReplacer: {
    height: HEADER_MAX_HEIGHT,
    justifyContent: 'flex-end',
    paddingBottom: INTRODUCTION_IMAGE_INTERSECTION,
  },
  introductionContainer: {
    marginTop: -INTRODUCTION_IMAGE_INTERSECTION,
    padding: 12,
    borderRadius: 12,
  },
});

// const sttt = StylesFactory(theme=>({

// }))

// const StylesFactory = (callback)=>StyleSheet.create(callback(theme))

export interface IHomeScreenProps {}

export default HomeScreen;
