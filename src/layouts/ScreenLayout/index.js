import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { layoutStyle } from '../../styles';
import colors from '../../assets/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background_color,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
});

type Props = {
  children: any,
  style: Object | Array,
}

export default class ScreenLayout extends Component<Props> {
  render() {
    return (
      <View style={[layoutStyle.screen, styles.container, this.props.style]}>
        {this.props.children}
      </View>
    );
  }
}

