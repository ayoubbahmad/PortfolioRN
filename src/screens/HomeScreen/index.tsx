import React from 'react';
import { FormattedMessage } from 'components/FormattedMessage';
import { View } from 'react-native';

import { useSelector } from 'react-redux';
import messages from './messages';
import produce from 'immer';
import { useInjectReducer } from 'redux-injectors';

const reducer = produce(
  (draft, action) => {
    switch (action.type) {
      case '':
        // draft.data = action.payload;
        break;
    }
  },
  { homeData: 'homeScreen' },
);

const HomeScreen: React.FC<IHomeScreenProps> = ({}) => {
  const test = useSelector((state: any) => (state.detailsScreen || {}).test);
  useInjectReducer({ key: 'homeScreen', reducer });

  return (
    <View>
      <FormattedMessage {...messages.test} />
      <FormattedMessage {...messages.title} />
    </View>
  );
};

export interface IHomeScreenProps {}

export { HomeScreen };
