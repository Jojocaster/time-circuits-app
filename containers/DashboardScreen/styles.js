import { StyleSheet } from 'react-native';
import {Constants} from 'expo';

export const styles = StyleSheet.create({
  container: {
		backgroundColor: '#282a36',
    paddingTop: Constants.statusBarHeight,
    // alignItems: 'center',
		// borderStyle: 'solid',
    // backgroundColor: '#040405',
		flex: 1,
		// flexDirection: 'row',
		// justifyContent: 'center',
    // paddingHorizontal: 10
  },
	button: {
		borderColor: '#fff',
		borderStyle: 'solid',
		borderWidth: 1,
		margin: 20,
		padding: 10,
	},
	text: {
		color: '#fff',
	}
});