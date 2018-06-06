import {Dimensions} from 'react-native';
import {ORIENTATION} from './constants';

export const capitalize = (str) => {
	return str[0].toUpperCase() + str.substr(1);
}

export const getOrientation = () => {
	const {height, width} = Dimensions.get('window');
	return (height > width) ? ORIENTATION.PORTRAIT : ORIENTATION.LANDSCAPE;
}

export const getOrientationStyles = (styles, orientation, classes) => {
	const o = {};

	return classes.map(c => {
		return o[c] = [styles[c], styles[c + orientation]];
	});
}