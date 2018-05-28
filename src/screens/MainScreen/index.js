import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

class MainScreen extends Component {
  render() {
    return (
      <View style={[styles.container]}>
        <Text> MainScreen </Text>
      </View>
    );
  }
}

export default MainScreen;
