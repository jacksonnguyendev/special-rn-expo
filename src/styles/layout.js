import { StyleSheet, Platform } from 'react-native';

const layout = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Platform.select({
      ios: 20,
      android: 0,
    }),
  },
});

export default layout;
