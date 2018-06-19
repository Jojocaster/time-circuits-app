import React, { Component } from 'react';
import { View, Animated } from 'react-native';
import PropTypes from 'prop-types';

import { AM, PM, ORIENTATION } from '../../helpers/constants';
import { getOrientation } from '../../helpers/helpers';

import { landscapeStyles, portraitStyles } from './styles';

class PeriodDisplay extends Component {
  state = { orientation: getOrientation() };

  amValue = new Animated.Value(this.props.value === AM ? 1 : 0);
  pmValue = new Animated.Value(this.props.value === PM ? 1 : 0);

  onLayout = () => {
    this.setState({ orientation: getOrientation() });
  };

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
    const style =
      this.state.orientation === ORIENTATION.LANDSCAPE
        ? landscapeStyles
        : portraitStyles;
    const opacityRange = { inputRange: [0, 1], outputRange: [0.4, 1] };
    const scaleRange = { inputRange: [0, 1], outputRange: [0.9, 1] };

    const amStyle = {
      opacity: this.amValue.interpolate(opacityRange),
      transform: [{ scale: this.amValue.interpolate(scaleRange) }]
    };

    const pmStyle = {
      opacity: this.pmValue.interpolate(opacityRange),
      transform: [{ scale: this.pmValue.interpolate(scaleRange) }]
    };

    return (
      <View style={style.container} onLayout={this.onLayout}>
        <Animated.Text
          onPress={() => this.update(AM)}
          style={[style.label, amStyle]}>
          AM
        </Animated.Text>
        <Animated.Text
          onPress={() => this.update(PM)}
          style={[style.label, pmStyle]}>
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
