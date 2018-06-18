import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './styles';

export const TimeControls = ({ onSave, sync }) => {
  return (
    <View style={styles.container}>
      <View style={styles.status} />
      <Text style={styles.text}>{sync}</Text>
    </View>
  );
};

TimeControls.propTypes = {
  onSave: PropTypes.func.isRequired,
  sync: PropTypes.string.isRequired
};
