import React from 'react';
import { Text, TextProps } from 'react-native';

import * as i18n from 'i18n';
import { createSelector } from 'reselect';
import { makeSelectLocale } from 'providers/LanguageProvider/selectors';
import { useSelector } from 'react-redux';
import { makeStyleSheet } from 'utils/makeStyleSheet';

const stateSelector = createSelector(makeSelectLocale(), (locale) => ({
  locale,
}));

const FormattedMessage: React.FC<IFormattedMessageProps> = (props) => {
  const { scope, options, ...textProps } = props;

  const { locale } = useSelector(stateSelector);
  const styles = useStyles();

  return (
    <Text {...textProps} style={styles.text}>
      {i18n.t(scope, { locale, ...options })}
    </Text>
  );
};

const useStyles = makeStyleSheet((theme) => ({
  text: { color: theme.colors.text },
}));

export interface IFormattedMessageProps extends TextProps {
  scope: string | null;
  options?: Object;
}

export { FormattedMessage };
