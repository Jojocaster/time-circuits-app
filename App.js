import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './containers/HomeScreen';
import DashboardScreen from './containers/DashboardScreen';

const RootStack = createStackNavigator({
  Home: HomeScreen,
  Dashboard: DashboardScreen,
}, 
{
  navigationOptions: {
    header: null
  }
});

export default class App extends React.Component {
  render() {
    return (
      <RootStack />
    );
  }
}