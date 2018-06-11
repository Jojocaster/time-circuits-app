import { Dimensions } from 'react-native';
import { ORIENTATION, AM } from './constants';

export const capitalize = (str) => {
  return str[0].toUpperCase() + str.substr(1);
};

export const getOrientation = () => {
  const { height, width } = Dimensions.get('window');

  return height > width ? ORIENTATION.PORTRAIT : ORIENTATION.LANDSCAPE;
};

export const getDimensions = () => {
  return {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  };
};

export const generateDisplays = () => {
  const items = [];

  for (let i = 0; i < 3; i++) {
    items.push(
      { rId: i, title: 'month', value: 'OCT', maxLength: 3 },
      { rId: i, title: 'day', value: '26', maxLength: 2 },
      { rId: i, title: 'year', value: '1985', maxLength: 4 },
      { rId: i, title: 'hour', value: '01', maxLength: 2 },
      { rId: i, title: 'min', value: '22', maxLength: 2 },
      { rId: i, title: 'ampm', value: AM, maxLength: 1, isPeriod: true }
    );
  }

  return items;
};
