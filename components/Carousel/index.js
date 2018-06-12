import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';

class Carousel extends Component {
  scroll = (event) => {
    console.log(event.nativeEvent.contentOffset.x);
  };

  render() {
    const { children, style } = this.props;

    return (
      <ScrollView
        contentContainerStyle={style}
        horizontal={true}
        onScroll={this.scroll}
        scrollEventThrottle={16}
        pagingEnabled={true}>
        {children}
      </ScrollView>
    );
  }
}

Carousel.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  style: PropTypes.any
};

export default Carousel;
