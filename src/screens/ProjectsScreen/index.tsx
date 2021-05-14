/**
 *
 * ProjectsScreen
 *
 */

import React from 'react';
// import { FormattedMessage } from 'components/FormattedMessage';
import { View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';

import { useInjectReducer, useInjectSaga } from 'redux-injectors';

import makeSelectProjectsScreen from './selectors';
import reducer from './reducer';
import saga from './saga';

// import messages from './messages';

import { makeStyleSheet } from 'utils/makeStyleSheet';

const stateSelector = createStructuredSelector({
  projectsScreen: makeSelectProjectsScreen(),
});

const key = 'projectsScreen';

const ProjectsScreen: React.FC<IProjectsScreenProps> = ({}) => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const styles = useStyle();

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

const useStyle = makeStyleSheet((theme) => ({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  header: {
    height: 330,
    backgroundColor: theme.colors.contrast,
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
}));

export interface IProjectsScreenProps {}

export default ProjectsScreen;
