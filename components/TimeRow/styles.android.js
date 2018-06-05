import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
		flex: 1,
  },
	header: {
		alignItems: 'center', 
		justifyContent: 'center', 
		left: 0, 
		position: 'absolute', 
		right: 0, 
		top: 10, 
		zIndex: 1
	},
	title: {
		backgroundColor: '#282a36',
		color: 'white',
		fontFamily: 'Roboto',
		fontWeight: 'bold',
		paddingLeft: 20, 
		paddingRight: 20
	},
	inner: {
		alignContent: 'center', 
		borderStyle: 'solid', 
		borderWidth: 1,
		flex: 1, 
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center', 
		margin: 20, 
	}
});