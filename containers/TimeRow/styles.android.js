import { StyleSheet } from 'react-native';
import { baseStyles } from './styles.base';

export const styles = StyleSheet.create({
  ...baseStyles,
  ...{
    label: {
      ...baseStyles.label,
      fontFamily: 'Roboto'
    }
  }
});
