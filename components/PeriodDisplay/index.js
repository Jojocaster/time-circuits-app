import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './styles';
import { AM, PM } from '../../helpers/constants';

// const test = (val) => {
//   console.log(val);
// };
const PeriodDisplay = ({ onChange, value }) => {
  return (
    <View style={styles.container}>
      {/* <TouchableHighlight onPress={test}> */}
      <Text style={value === AM ? styles.labelActive : styles.label}>AM</Text>
      {/* </TouchableHighlight> */}

      {/* <TouchableHighlight onPress={onChange}> */}
      <Text style={value === PM ? styles.labelActive : styles.label}>PM</Text>
      {/* </TouchableHighlight> */}
    </View>
  );
};

PeriodDisplay.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
};

export default PeriodDisplay;
