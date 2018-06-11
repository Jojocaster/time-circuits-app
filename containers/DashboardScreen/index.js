import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, View } from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';

import { styles } from './styles';
import TimeRow from '../../components/TimeRow';

const mapStateToProps = (state) => {
  return {
    rows: state.rows
  };
};

class DashboardScreen extends Component {
  // makeRow(month, day, year, hour, min) {
  //   return [
  //     { title: 'month', value: month, maxLength: 3 },
  //     { title: 'day', value: day, maxLength: 2 },
  //     { title: 'year', value: year, maxLength: 4 },
  //     { title: 'hour', value: hour, maxLength: 2 },
  //     { title: 'min', value: min, maxLength: 2 }
  //   ];
  // }

  onUpdate = (test, title) => {
    console.log(test, title);
  };

  render() {
    // const lastTimeDeparted = this.makeRow('OCT', '26', '1985', '01', '22');
    // const presentTime = this.makeRow('OCT', '26', '1985', '01', '22');
    // const destinationTime = this.makeRow('OCT', '26', '1985', '01', '22');
    const { rows } = this.props;

    return (
      <ScrollView
        contentContainerStyle={styles.container}
        horizontal={true}
        pagingEnabled={true}>
        {rows.map((row) => (
          <TimeRow
            key={row.id}
            id={row.id}
            label={row.label}
            color={row.color}
          />
        ))}
        <View style={{ backgroundColor: 'red', height: 50 }}>
          <Text>Yo</Text>
        </View>
      </ScrollView>
    );
  }
}

DashboardScreen.propTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired
    })
  )
};

export default connect(mapStateToProps)(DashboardScreen);
