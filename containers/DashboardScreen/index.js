import React, { Component } from 'react';
import {Text, View} from 'react-native';

import {styles} from './styles';
import TimeRow from '../../components/TimeRow';
import TimeItem from '../../components/TimeItem';

class DashboardScreen extends Component {

	makeRow(month, day, year, hour, min) {
		return [
			{title: 'month', value: month, maxLength: 3},
			{title: 'day', value: day, maxLength: 2},
			{title: 'year', value: year, maxLength: 4},
			{title: 'hour', value: hour, maxLength: 2},
			{title: 'min', value: min, maxLength: 2},
		]
	}

	onUpdate = (test, title) => {
		console.log(test, title);
	}

	render() {
		const red = '#e74c3c', green = '#2ecc71', yellow = '#f1c40f';
		const lastTimeDeparted = this.makeRow('OCT', '26', '1985', '01', '22');
		const presentTime = this.makeRow('OCT', '26', '1985', '01', '22');
		const destinationTime = this.makeRow('OCT', '26', '1985', '01', '22');

		return (
			<View style={styles.container}>
				<TimeRow title="last time departed" color={green}>
					{lastTimeDeparted.map((item, key) =>
						<TimeItem title={item.title} value={item.value} maxLength={item.maxLength} key={key} color={green} onUpdate={this.onUpdate}/>
					)}
				</TimeRow>
				<TimeRow title="present time" color={yellow}>
					{presentTime.map((item, key) =>
						<TimeItem title={item.title} value={item.value} key={key} color={yellow}/>
					)}
				</TimeRow>
				<TimeRow title="destination time" color={red}>
					{destinationTime.map((item, key) =>
						<TimeItem title={item.title} value={item.value} key={key} color={red}/>
					)}
				</TimeRow>
				<View style={{backgroundColor: 'red', height: 50}}>
					<Text>Yo</Text>
				</View>
			</View>
		);
	}
}

export default DashboardScreen;