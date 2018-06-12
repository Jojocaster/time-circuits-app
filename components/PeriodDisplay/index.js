import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { AM, PM } from '../../helpers/constants';

const PeriodDisplay = ({ value }) => {
  return (
    <View style={styles.container}>
      <Text style={value === AM ? styles.labelActive : styles.label}>AM</Text>
      <Text style={value === PM ? styles.labelActive : styles.label}>PM</Text>
    </View>
  );
};

export default PeriodDisplay;
