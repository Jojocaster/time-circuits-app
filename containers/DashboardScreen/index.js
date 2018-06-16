import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { styles } from './styles';

import Carousel from '../../components/Carousel';
import TimeRow from '.../TimeRow';

const mapStateToProps = (state) => {
  return {
    rows: state.rows
  };
};

class DashboardScreen extends Component {
  render() {
    const { rows } = this.props;

    return (
      <Carousel style={styles.container} pagination={true}>
        {rows.map((row) => (
          <TimeRow
            key={row.id}
            id={row.id}
            label={row.label}
            color={row.color}
          />
        ))}
      </Carousel>
      // <View style={{ backgroundColor: 'red', height: 50 }}>
      //   <Text>Yo</Text>
      // </View>
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
