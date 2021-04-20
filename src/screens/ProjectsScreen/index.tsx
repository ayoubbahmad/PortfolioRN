/**
 *
 * ProjectsScreen
 *
 */

import React from 'react';
import { View, StyleSheet, Image, Text, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import makeSelectProjectsScreen from './selectors';
import reducer from './reducer';
import saga from './saga';
import { FormattedMessage } from 'components/FormattedMessage';
import messages from './messages';

import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
import { StyleSheetFactory } from 'utils/StyleSheetFactory';
import useStyleSheetFactory from 'hooks/useStyleSheetFactory';

const stateSelector = createStructuredSelector({
  projectsScreen: makeSelectProjectsScreen(),
});

const key = 'projectsScreen';

const ProjectsScreen: React.FC<IProjectsScreenProps> = ({}) => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const styles = useStyleSheetFactory(stylesFactory);

  /* eslint-disable no-unused-vars */
  const { projectsScreen } = useSelector(stateSelector);
  const dispatch = useDispatch();
  /* eslint-enable no-unused-vars */

  // return (
  //   <View style={styles.container}>
  //     <FormattedMessage {...messages.header} />
  //   </View>
  // );
  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event: any) => {
    scrollY.value = event.contentOffset.y;
  });

  const headerStyle = useAnimatedStyle(() => {
    return {
      height: interpolate(
        scrollY.value,
        [0, 180],
        [300, 120],
        Extrapolate.CLAMP,
      ),
    };
  });

  const avatarStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollY.value,
        [100, 150],
        [1, 0],
        Extrapolate.CLAMP,
      ),
    };
  });

  return (
    <View>
      <Animated.ScrollView
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        contentContainerStyle={{ paddingTop: 300 }}>
        <Text style={styles.listItem}>Item da listaaa</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
      </Animated.ScrollView>

      <Animated.View style={[styles.header, headerStyle]}>
        <Animated.Image
          style={[styles.avatar, avatarStyle]}
          source={{ uri: 'https://github.com/diego3g.png' }}
        />
        <Text style={styles.name}>Diego Fernandes</Text>
      </Animated.View>
    </View>
  );
};

// const styles = StyleSheet.create({
// container: {
//   justifyContent: 'center',
//   alignItems: 'center',
//   flex: 1,
// },
// });

const stylesFactory = (theme) => ({
  // const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  header: {
    height: 330,
    // backgroundColor: '#6C63FF',
    backgroundColor: theme.color.primary,

    paddingVertical: 30,
    justifyContent: 'flex-end',
    alignItems: 'center',

    position: 'absolute',
    overflow: 'hidden',
    left: 0,
    right: 0,
    top: 0,
  },

  avatar: {
    height: 140,
    width: 140,
    borderRadius: 70,
    backgroundColor: 'rgba(0,0,0,0.2)',
    // backgroundColor: theme.color.primary,
  },

  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    color: '#FFF',
  },

  listItem: {
    padding: 20,
    fontSize: 18,
  },
});
// });

export interface IProjectsScreenProps {}

export default ProjectsScreen;
