import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect, dispatch } from 'react-redux';
import { KeyboardAvoidingView, Text, View } from 'react-native';

import { styles } from './styles';
import { getDimensions } from '../../helpers/helpers';
import { updateDisplay } from './actions';

import TimeDisplay from '../TimeDisplay';

const mapStateToProps = (state) => {
  return {
    displays: state.displays
  };
};

const mapDispatchToProps = () => {
  return {
    updateDisplay: (display) => {
      dispatch(updateDisplay(display));
    }
  };
};

class TimeRow extends Component {
  constructor(props) {
    super(props);
    const { height, width } = getDimensions();

    this.state = { height, width };
  }

  onLayout = () => {
    const { height, width } = getDimensions();

    this.setState({ height, width });
  };

  render() {
    console.log(this.props);
    const { width } = this.state;
    const { color, displays, id, label } = this.props;
    const dsplys = displays.filter((dp) => dp.rId === id);

    return (
      <KeyboardAvoidingView
        enabled
        onLayout={this.onLayout}
        style={[styles.container, { width }]}
        behavior="position"
        contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.header}>
          <Text style={styles.label}>{label.toUpperCase()}</Text>
        </View>
        <View style={[styles.inner, { borderColor: color }]}>
          {dsplys.map((dp) => (
            <TimeDisplay
              onUpdate={this.updateDisplay}
              color={color}
              key={dp.title}
              isPeriod={dp.isPeriod}
              maxLength={dp.maxLength}
              title={dp.title}
              value={dp.value}
            />
          ))}
        </View>
      </KeyboardAvoidingView>
    );
  }
}

TimeRow.propTypes = {
  color: PropTypes.string.isRequired,
  displays: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeRow);
