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

const HEADER_MIN_HEIGHT = 50;
const HEADER_MAX_HEIGHT = 330;

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
        // onScroll={Animated.event([
        //   { nativeEvent: { contentOffset: { y: scrollYAnimation } } },
        // ])}
        contentContainerStyle={[styles.scrollViewContentContainerStyle]}
        style={StyleSheet.absoluteFill}>
        <View style={{ height: HEADER_MAX_HEIGHT }} />
        <FormattedMessage {...messages.header} />
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
  },
  scrollViewStyle: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: HEADER_MAX_HEIGHT,
    resizeMode: 'cover',
  },
});

export interface IHomeScreenProps {}

export default HomeScreen;
