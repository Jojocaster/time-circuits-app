import { StyleSheet } from 'react-native';
import { Constants } from 'expo';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#282a36',
    paddingTop: Constants.statusBarHeight
  },
  button: {
    borderColor: '#fff',
    borderStyle: 'solid',
    borderWidth: 1,
    margin: 20,
    padding: 10
  },
  text: {
    color: '#fff'
  }
});
