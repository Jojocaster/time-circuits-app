import React, { Component } from 'react';
import { View, Animated } from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './styles';
import { AM, PM } from '../../helpers/constants';

class PeriodDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = { val: 1 };
    this.amValue = new Animated.Value(this.state.val === AM ? 1 : 0);
    this.pmValue = new Animated.Value(this.state.val === PM ? 1 : 0);
  }

  test(val) {
    this.setState({ val: val });
  }

  componentDidUpdate(newProp) {
    Animated.timing(this.amValue, {
      toValue: this.state.val === AM ? 1 : 0,
      duration: 200
    }).start();

    Animated.timing(this.pmValue, {
      toValue: this.state.val === PM ? 1 : 0,
      duration: 200
    }).start();
  }
  render() {
    const { value } = this.props;

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
          onPress={() => this.test(AM)}
          style={[styles.label, amStyle]}>
          AM
        </Animated.Text>
        <Animated.Text
          onPress={() => this.test(PM)}
          style={[styles.label, pmStyle]}>
          PM
        </Animated.Text>
      </View>
    );
  }
}

PeriodDisplay.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
};

export default PeriodDisplay;
