import { StyleSheet } from 'react-native';

const label = {
  color: 'white',
  fontSize: 14,
  fontWeight: 'bold',
  margin: 5,
  textAlign: 'center',
  width: '100%'
};

export const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 10,
    width: '33%'
  },
  label: { ...label },
  labelActive: {
    ...label,
    color: 'white',
    fontSize: 14
  }
});
