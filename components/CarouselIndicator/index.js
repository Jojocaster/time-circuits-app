import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Animated, View } from 'react-native';

import { styles } from './styles';

class CarouselIndicator extends Component {
  render() {
    const { items, position } = this.props;

    return (
      <View style={styles.view}>
        <View style={styles.container}>
          {items.map((item, i) => {
            let opacity = position.interpolate({
              inputRange: [i - 1, i, i + 1],
              outputRange: [0.3, 1, 0.3],
              extrapolate: 'clamp'
            });

            return (
              <Animated.View key={i} style={[styles.indicator, { opacity }]} />
            );
          })}
        </View>
      </View>
    );
  }
}

CarouselIndicator.propTypes = {
  items: PropTypes.arrayOf(PropTypes.element).isRequired,
  position: PropTypes.object.isRequired
};

export default CarouselIndicator;
