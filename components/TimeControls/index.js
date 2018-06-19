import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

import { SYNC_COLORS } from '../../helpers/constants';
import Button from '../Button/';

import { styles } from './styles';

export const TimeControls = ({ onSave, sync }) => {
  const color = SYNC_COLORS[sync];

  return (
    <View style={styles.container}>
      <View style={styles.status}>
        <View style={[styles.state, { backgroundColor: color }]} />
        <Text style={styles.text}>{sync}</Text>
      </View>
      <View>
        <Image
          style={{ width: 77.5, height: 15 }}
          source={require('../../assets/update.png')}
        />
      </View>
    </View>
  );
};

TimeControls.propTypes = {
  onSave: PropTypes.func.isRequired,
  sync: PropTypes.string.isRequired
};
