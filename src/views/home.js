// HomeScreen.js

import React, { Component } from 'react';
import { View, Text,Button } from 'react-native';
import {Navigation} from 'react-native-navigation';

export default class HomeScreen extends Component {

  onButtonPress = (screenName) => {
    Navigation.push(this.props.componentId, {
      component: {
        name: screenName
      }
    });
  }

  render() {
    return (
      <View>
        <Text>Home Screen</Text>
        <Button title="Tab Navigation" onPress = { () => this.onButtonPress('InboxScreen') } />
      </View>
    );
  }
}