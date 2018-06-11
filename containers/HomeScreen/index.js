import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './styles';
import Button from '../../components/Button/index';

// type Props = {
//   navigation: any
// };

// type State = {
//   pressed: boolean
// };

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pressed: false };
  }

  onPress = () => {
    this.props.navigation.navigate('Dashboard');
    this.setState({ pressed: !this.state.pressed });
  };

  render() {
    let pressed = this.state.pressed ? 'pressed' : 'not pressed';

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Open up App.js to start working on your app!</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Button onPress={this.onPress}>{pressed}</Button>
      </View>
    );
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
};
