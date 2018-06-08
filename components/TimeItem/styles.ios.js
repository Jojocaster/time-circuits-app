import { StyleSheet } from 'react-native';
import { baseStyles } from './styles.base';

export const portraitStyles = StyleSheet.create({
  ...baseStyles,
  ...{
    container: {
      ...baseStyles.container,
      flexDirection: 'row',
      width: '33%'
    }
  }
});

export const landscapeStyles = StyleSheet.create({
  ...baseStyles,
  ...{
    container: {
      ...baseStyles.container,
      padding: 10,
      width: '16%'
    },
    title: {
      ...baseStyles.title,
      flex: 1,
      fontSize: 10,
      marginTop: -5
    }
  }
});
