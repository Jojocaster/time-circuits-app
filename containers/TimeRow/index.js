import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { KeyboardAvoidingView, Text, View } from 'react-native';

import { styles } from './styles';
import { getDimensions } from '../../helpers/helpers';
import { updateDisplay } from './actions';

import TimeDisplay from '../../components/TimeDisplay';
import { TimeControls } from '../../components/TimeControls';

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

  onSave(row) {
    console.log(row);
  }

  render() {
    const { width } = this.state;
    const { color, displays, id, label, sync } = this.props;
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
              onUpdate={(display) => this.props.update(display)}
              color={color}
              key={dp.title}
              isPeriod={dp.isPeriod}
              maxLength={dp.maxLength}
              rId={dp.rId}
              title={dp.title}
              value={dp.value}
            />
          ))}
        </View>
        <TimeControls sync={sync} onSave={(row) => this.onSave(row)} />
      </KeyboardAvoidingView>
    );
  }
}

TimeRow.propTypes = {
  color: PropTypes.string.isRequired,
  displays: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  sync: PropTypes.string.isRequired,
  update: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    displays: state.displays
  };
};

const mapDispatchToProps = (dispatch) => ({
  update: (display) => {
    dispatch(updateDisplay(display));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeRow);
