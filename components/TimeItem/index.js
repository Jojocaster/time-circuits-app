// @flow
import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';

import { ORIENTATION } from '../../helpers/constants';
import { getOrientation } from '../../helpers/helpers';
import { landscapeStyles, portraitStyles } from './styles';

export default class TimeRow extends Component {
  constructor(props) {
    super(props);
    this.state = { orientation: getOrientation() };
  }

  onLayout = (e) => {
    this.setState({ orientation: getOrientation() });
  };

  update = (val) => {
    this.props.onUpdate(val, this.props.title);
  };

  render() {
    const { color, title, value, maxLength } = this.props;
    const styles = this.state.orientation === ORIENTATION.LANDSCAPE ? landscapeStyles : portraitStyles;

    return (
      <View style={styles.container} onLayout={this.onLayout}>
        <TextInput
          onChangeText={this.update}
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

TimeRow.propTypes = {
  color: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  maxLength: PropTypes.number.isRequired
};
