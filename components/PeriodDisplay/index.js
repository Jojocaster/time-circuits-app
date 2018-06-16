import React, { Component } from 'react';
import { View, Animated } from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './styles';
import { AM, PM } from '../../helpers/constants';

class PeriodDisplay extends Component {
  amValue = new Animated.Value(this.props.value === AM ? 1 : 0);
  pmValue = new Animated.Value(this.props.value === PM ? 1 : 0);

  update(val) {
    this.props.onUpdate(val);
  }

  componentDidUpdate(newProp) {
    Animated.timing(this.amValue, {
      toValue: this.props.value === AM ? 1 : 0,
      duration: 200
    }).start();

    Animated.timing(this.pmValue, {
      toValue: this.props.value === PM ? 1 : 0,
      duration: 200
    }).start();
  }

  render() {
    const amStyle = {
      opacity: this.amValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0.4, 1]
      }),
      transform: [
        {
          scale: this.amValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0.9, 1]
          })
        }
      ]
    };

    const pmStyle = {
      opacity: this.pmValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0.4, 1]
      }),
      transform: [
        {
          scale: this.pmValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0.9, 1]
          })
        }
      ]
    };

    return (
      <View style={styles.container}>
        <Animated.Text
          onPress={() => this.update(AM)}
          style={[styles.label, amStyle]}>
          AM
        </Animated.Text>
        <Animated.Text
          onPress={() => this.update(PM)}
          style={[styles.label, pmStyle]}>
          PM
        </Animated.Text>
      </View>
    );
  }
}

PeriodDisplay.propTypes = {
  onUpdate: PropTypes.func.isRequired,
  rId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired
};

export default PeriodDisplay;
