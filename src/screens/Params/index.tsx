/**
 *
 * Params
 *
 */

import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import makeSelectParams from './selectors';
import reducer from './reducer';
import saga from './saga';
import { FormattedMessage } from 'components/FormattedMessage';
import messages from './messages';
// import { navigateAction } from 'providers/NavigationProvider/actions';
import {
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
} from 'react-native-gesture-handler';
import { CommonActions, useNavigation } from '@react-navigation/core';
import { HomeScreen } from 'screens/HomeScreen';
import { DetailsScreen } from 'screens/DetailsScreen';
import useTheme from 'hooks/useTheme';

const stateSelector = createStructuredSelector({
  params: makeSelectParams(),
});

const key = 'params';

const Params: React.FC<IParamsProps> = ({}) => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  /* eslint-disable no-unused-vars */
  const { params } = useSelector(stateSelector);
  const dispatch = useDispatch();

  const navigation = useNavigation();
  const { color } = useTheme();

  /* eslint-enable no-unused-vars */

  const navigateToHome = () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'Home',
        params: {},
      }),
    );
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.container,
          { backgroundColor: color.background, width: '100%' },
        ]}>
        <TouchableNativeFeedback onPress={navigateToHome}>
          <FormattedMessage {...messages.header} />
        </TouchableNativeFeedback>
        <HomeScreen />
        <DetailsScreen />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export interface IParamsProps {}

export default Params;
