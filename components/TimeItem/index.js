// @flow
import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';

import { ORIENTATION } from '../../helpers/constants';
import { getOrientation } from '../../helpers/helpers';
import { landscapeStyles, portraitStyles } from './styles';

type Props = {
  color: string,
  onUpdate: (val: string, title: string) => void,
  title: string,
  value: string,
  maxLength: number
};

type State = {
  orientation: 'string'
};

export default class TimeRow extends Component<Props, State> {
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
    const styles =
      this.state.orientation === ORIENTATION.LANDSCAPE
        ? landscapeStyles
        : portraitStyles;

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
