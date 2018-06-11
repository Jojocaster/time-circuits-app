import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { styles } from './styles';
import TimeDisplay from '../TimeDisplay';

const mapStateToProps = (state) => {
  return {
    displays: state.displays
  };
};

class TimeRow extends Component {
  render() {
    const { color, displays, id, label } = this.props;
    const dsplys = displays.filter((dp) => dp.rId === id);

    return (
      <View style={[styles.container]}>
        <View style={styles.header}>
          <Text style={styles.label}>{label.toUpperCase()}</Text>
        </View>
        <View style={[styles.inner, { borderColor: color }]}>
          {dsplys.map((dp) => (
            <TimeDisplay
              color={color}
              key={dp.title}
              value={dp.value}
              title={dp.title}
              maxLength={dp.maxLength}
            />
          ))}
        </View>
      </View>
    );
  }
}

TimeRow.propTypes = {
  color: PropTypes.string.isRequired,
  displays: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired
};

export default connect(mapStateToProps)(TimeRow);
