import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './styles';

export const TimeControls = ({ onSave, sync }) => {
  return <View style={styles.status} />;
};

TimeControls.propTypes = {
  onSave: PropTypes.func.isRequired,
  sync: PropTypes.string.isRequired
};
