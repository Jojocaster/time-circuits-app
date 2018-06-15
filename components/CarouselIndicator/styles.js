import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  view: {
    bottom: 30,
    left: 0,
    position: 'absolute',
    width: '100%'
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  indicator: {
    backgroundColor: '#595959',
    borderRadius: 5,
    height: 8,
    margin: 8,
    width: 8
  }
});
