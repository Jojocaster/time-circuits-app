import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View } from 'react-native';

import CarouselIndicator from '../CarouselIndicator';

class Carousel extends Component {
  onScroll = (event) => {
    this.offsetX = event.nativeEvent.contentOffset.x;
  };

  render() {
    const { children, pagination, style } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={style}
          horizontal={true}
          onScroll={this.onScroll}
          scrollEventThrottle={16}
          pagingEnabled={true}>
          {children}
        </ScrollView>
        {pagination && <CarouselIndicator items={children} />}
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
