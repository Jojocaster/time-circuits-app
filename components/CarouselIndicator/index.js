import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Animated, View } from 'react-native';

class CarouselIndicator extends Component {
  render() {
    const { items } = this.props;

    return (
      <View
        style={{ position: 'absolute', bottom: 10, left: 0, width: '100%' }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          {items.map((item, i) => (
            <Animated.View
              key={i}
              style={{
                height: 10,
                width: 10,
                backgroundColor: '#595959',
                margin: 8,
                borderRadius: 5
              }}
            />
          ))}
        </View>
      </View>
    );
  }
}

CarouselIndicator.propTypes = {
  items: PropTypes.arrayOf(PropTypes.element).isRequired
};

export default CarouselIndicator;
