import React, { Component } from 'react';
import {Text, TextInput, View} from 'react-native';

import { styles } from './styles';

export default class TimeRow extends Component {
	constructor(props) {
		super(props);
	}

	update = (val) => {
		this.props.onUpdate(val, this.props.title);
	}
	
	render() {
		const {color, title, value, maxLength} = this.props;

		return (
			<View style={styles.container}>
				<TextInput onChangeText={this.update} 
					maxLength={maxLength}
					selectTextOnFocus={true} 
					underlineColorAndroid="rgba(0, 0, 0, 0)"
					style={[styles.textInput, {color: color}]}>
					{value}
				</TextInput>
				<Text style={styles.title}>{title.toUpperCase()}</Text>
			</View>
		);
	}
}