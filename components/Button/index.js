import React , { Component }from 'react';
import { Text, TouchableHighlight, View } from 'react-native';

import { styles } from './styles'; 

export default class Button extends Component {
	constructor(props) {
		super(props);
	}

  render() {
		const {children, onPress} = this.props;

    return (
      <View style={styles.container}>
				<TouchableHighlight onPress={onPress} style={styles.button} underlayColor={'rgba(255, 255, 255, .3)'}>
        	<Text style={styles.text}>{children}</Text>
				</TouchableHighlight>
      </View>
    );
  }
}