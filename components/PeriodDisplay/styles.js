import { StyleSheet } from 'react-native';
import { baseStyles } from './styles.base';

export const portraitStyles = StyleSheet.create({
  ...baseStyles
});

export const landscapeStyles = StyleSheet.create({
  ...baseStyles,
  container: {
    ...baseStyles.container,
    width: '16%'
  }
});
