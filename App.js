import React from 'react';
import { Provider } from 'react-redux';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './containers/HomeScreen';
import DashboardScreen from './containers/DashboardScreen';

import { store } from './store';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Dashboard: DashboardScreen
  },
  {
    navigationOptions: {
      header: null
    }
  }
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}
