import React, { Component } from 'react';
import {Text, View} from 'react-native';

import {styles} from './styles';

export default class TimeRow extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {color, title, children} = this.props;

		return (
			<View style={[styles.container]}>
				<View style={styles.header}>
					<Text style={styles.title}>{title.toUpperCase()}</Text>
				</View>
				<View style={[styles.inner, {borderColor: color}]}>
					{children}
				</View>
			</View>
		);
	}
}