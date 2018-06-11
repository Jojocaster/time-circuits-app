import React, { Component } from 'react';
import { KeyboardAvoidingView, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { styles } from './styles';
import { GREEN, RED, YELLOW } from '../../helpers/constants';
import TimeRow from '../../components/TimeRow';
import TimeItem from '../../components/TimeItem';

class DashboardScreen extends Component {
  makeRow(month, day, year, hour, min) {
    return [
      { title: 'month', value: month, maxLength: 3 },
      { title: 'day', value: day, maxLength: 2 },
      { title: 'year', value: year, maxLength: 4 },
      { title: 'hour', value: hour, maxLength: 2 },
      { title: 'min', value: min, maxLength: 2 }
    ];
  }

  onUpdate = (test, title) => {
    console.log(test, title);
  };

  render() {
    const lastTimeDeparted = this.makeRow('OCT', '26', '1985', '01', '22');
    const presentTime = this.makeRow('OCT', '26', '1985', '01', '22');
    const destinationTime = this.makeRow('OCT', '26', '1985', '01', '22');

    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <KeyboardAvoidingView enabled style={styles.container} behavior="position" contentContainerStyle={{ flexGrow: 1 }}>
          <TimeRow title="last time departed" color={GREEN}>
            {lastTimeDeparted.map((item, key) => (
              <TimeItem title={item.title} value={item.value} maxLength={item.maxLength} key={key} color={GREEN} onUpdate={this.onUpdate} />
            ))}
          </TimeRow>
          <TimeRow title="present time" color={YELLOW}>
            {presentTime.map((item, key) => <TimeItem title={item.title} value={item.value} key={key} color={YELLOW} />)}
          </TimeRow>
          <TimeRow title="destination time" color={RED}>
            {destinationTime.map((item, key) => <TimeItem title={item.title} value={item.value} key={key} color={RED} />)}
          </TimeRow>
          <View style={{ backgroundColor: 'red', height: 50 }}>
            <Text>Yo</Text>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

export default DashboardScreen;
