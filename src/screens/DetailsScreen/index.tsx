/**
 *
 * DetailsScreen
 *
 */

import React, { useEffect } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { createStructuredSelector } from 'reselect';

import { useSelector, useDispatch } from 'react-redux';

import reducer, { initialState } from './reducer';
import saga from './saga';

import selectDetailsScreenDomain, {
  makeSelectForm,
  makeSelectTest,
} from './selectors';
// import { defaultAction } from './actions';
import { changeLocaleAction } from 'providers/LanguageProvider/actions';
import { makeSelectLocale } from 'providers/LanguageProvider/selectors';

import { fillFormAction } from './actions';

import usePersistor from 'hooks/userPersistor';
import useTheme from 'hooks/useTheme';
import { showAlertAction } from 'providers/AlertsProvider/actions';
import { changeThemeAction } from 'providers/ThemeProvider/actions';
// import {  } from 'react-native-gesture-handler';

const stateSelector = createStructuredSelector({
  local: makeSelectLocale(),
  test: makeSelectTest,
  form: makeSelectForm,
  detailsScreenDomain: selectDetailsScreenDomain(),
});

const key = 'detailsScreen';

const DetailsScreen: React.FC<IDetailsScreenProps> = ({}) => {
  const { loadPersistedStore } = usePersistor({
    key,
    reducer,
    initialState,
    delay: 10,
    // blacklist: ['loading', 'error'],
    // whiteList: ['form'],
    // TODO:
    // onLoadPersistedData: useEffect(onLoadPersistedData())
  });
  useInjectSaga({ key, saga });
  // useInjectReducer({ key, reducer });

  /* eslint-disable no-unused-vars */
  const { local, form } = useSelector(stateSelector);
  const dispatch = useDispatch();
  const { color, selectedTheme } = useTheme();
  const inputName = useFormInput('name');
  /* eslint-enable no-unused-vars */

  useEffect(() => {
    (async () => {
      const persistedStore = await loadPersistedStore();
      dispatch(fillFormAction({ ...persistedStore?.form }));
    })();
  }, []);

  const toggleLocal = () => {
    dispatch(changeLocaleAction(local === 'fr' ? 'en' : 'fr'));
    dispatch(
      showAlertAction({
        title: 'Local Changed',
        // message: `By default it will only compare complex objects in the props object. If you want control over the comparison, you can also provide a custom comparison function as the second argument.`,
        type: local === 'fr' ? 'warning' : 'info',
        gravity: 'top',
        // autoHide: false,
        // iconType: 'none',
      }),
    );
  };
  const toggleThem = () => {
    dispatch(changeThemeAction(selectedTheme === 'dark' ? 'light' : 'dark'));

    dispatch(
      showAlertAction({
        title: 'Theme Changed',
        type: selectedTheme === 'dark' ? 'success' : 'error',
        gravity: 'bottom',
        // autoHide: false,
      }),
    );
  };

  return (
    <>
      <TouchableOpacity
        onPress={toggleLocal}
        style={{ padding: 8, backgroundColor: 'red', alignSelf: 'center' }}>
        <Text>Switch to: {local === 'fr' ? 'Englais' : 'Français'}</Text>
      </TouchableOpacity>

      <TextInput
        placeholder="text"
        style={{
          padding: 8,
          minWidth: 200,
          borderColor: 'blue',
          borderWidth: 1,
          margin: 4,
          color: color.text,
        }}
        {...inputName}
        // onChangeText={(name) => dispatch(fillFormAction({ ...form, name }))}
        // defaultValue={form.name}
      />

      <TouchableOpacity onPress={toggleThem}>
        <Text style={{ color: color.text }}>{selectedTheme}</Text>
      </TouchableOpacity>
    </>
  );
};

const useFormInput = (inputKey: string) => {
  /* eslint-disable no-unused-vars */
  const { form } = useSelector(stateSelector);
  const dispatch = useDispatch();
  /* eslint-enable no-unused-vars */

  const onChangeText = (value: any) =>
    dispatch(fillFormAction({ ...form, [inputKey]: value }));
  const defaultValue = form[inputKey];

  return { onChangeText, defaultValue };
};

export type IDetailsScreenProps = {};

export { DetailsScreen };
