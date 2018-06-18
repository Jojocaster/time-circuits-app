import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './styles';
import { SYNC_COLORS } from '../../helpers/constants';

export const TimeControls = ({ onSave, sync }) => {
  const color = SYNC_COLORS[sync];

  return (
    <View style={styles.container}>
      <View style={[styles.status, { backgroundColor: color }]} />
      <Text style={styles.text}>{sync}</Text>
    </View>
  );
};

TimeControls.propTypes = {
  onSave: PropTypes.func.isRequired,
  sync: PropTypes.string.isRequired
};
