import React, { Component } from 'react';
import { ScrollView, View, Animated } from 'react-native';
import PropTypes from 'prop-types';

import CarouselIndicator from '../CarouselIndicator';
import { getDimensions } from '../../helpers/helpers';

class Carousel extends Component {
  offsetX = new Animated.Value(0);

  render() {
    const { children, pagination, style } = this.props;
    let position = Animated.divide(this.offsetX, getDimensions().width);

    return (
      <View style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={style}
          horizontal={true}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { x: this.offsetX } } }
          ])}
          scrollEventThrottle={16}
          pagingEnabled={true}>
          {children}
        </ScrollView>

        {pagination && (
          <CarouselIndicator items={children} position={position} />
        )}
      </View>
    );
  }
}

Carousel.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  pagination: PropTypes.bool,
  style: PropTypes.any
};

export default Carousel;
