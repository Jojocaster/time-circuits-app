// @flow
import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';

import { ORIENTATION } from '../../helpers/constants';
import { getOrientation } from '../../helpers/helpers';
import { landscapeStyles, portraitStyles } from './styles';

import PeriodDisplay from '../PeriodDisplay';

export default class TimeDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = { orientation: getOrientation() };
  }

  onLayout = (e) => {
    this.setState({ orientation: getOrientation() });
  };

  onUpdate(val) {
    const { rId, title } = this.props;
    const display = { rId, title, value: val };

    this.props.onUpdate(display);
  }

  render() {
    const { color, isPeriod, rId, title, value, maxLength } = this.props;
    const styles =
      this.state.orientation === ORIENTATION.LANDSCAPE
        ? landscapeStyles
        : portraitStyles;

    if (isPeriod) {
      return (
        <PeriodDisplay
          onUpdate={(val) => this.onUpdate(val)}
          rId={rId}
          title={title}
          value={value}
        />
      );
    }

    return (
      <View style={styles.container} onLayout={this.onLayout}>
        <TextInput
          onChangeText={(val) => this.onUpdate(val)}
          maxLength={maxLength}
          selectTextOnFocus={true}
          underlineColorAndroid="rgba(0, 0, 0, 0)"
          style={[styles.textInput, { color: color }]}>
          {value}
        </TextInput>
        <Text style={styles.title}>{title.toUpperCase()}</Text>
      </View>
    );
  }
}

TimeDisplay.propTypes = {
  color: PropTypes.string.isRequired,
  onUpdate: PropTypes.func,
  isPeriod: PropTypes.bool,
  maxLength: PropTypes.number,
  rId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired
};
