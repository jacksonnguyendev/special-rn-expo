import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

class DrawerScreen extends Component {
  render() {
    return (
      <View style={[styles.container]}>
        <Text> DrawerScreen </Text>
      </View>
    );
  }
}

export default DrawerScreen;
