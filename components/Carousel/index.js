import React, { Component } from 'react';
import { ScrollView, View, Animated } from 'react-native';
import PropTypes from 'prop-types';

import CarouselIndicator from '../CarouselIndicator';
import { getDimensions } from '../../helpers/helpers';

class Carousel extends Component {
  state = { width: getDimensions().width };

  offsetX = new Animated.Value(0);
  position = 0;
  scrollView = null;

  onScrollEnd = (e) => {
    // sets scroll index
    this.position = Math.round(
      e.nativeEvent.contentOffset.x / getDimensions().width
    );
  };

  onLayout = () => {
    // forces re-render to calculate new position
    this.setState({ width: getDimensions().width });
    // retains scroll position after rotation
    if (this.scrollView) {
      this.scrollView.scrollTo({
        x: this.position * getDimensions().width,
        animated: false
      });
    }
  };

  render() {
    const { children, pagination, style } = this.props;
    let position = Animated.divide(this.offsetX, this.state.width);

    return (
      <View style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={style}
          horizontal={true}
          onContentSizeChange={this.onLayout}
          onMomentumScrollEnd={this.onScrollEnd}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { x: this.offsetX } } }
          ])}
          pagingEnabled={true}
          ref={(scrollView) => (this.scrollView = scrollView)}
          scrollEventThrottle={16}>
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
