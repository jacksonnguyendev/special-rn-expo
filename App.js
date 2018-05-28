import React from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import Expo from 'expo';
import AppNavigator from './src/AppNavigator';
import store from './src/stores';
import I18n from './src/I18n/I18n';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appIsReady: false,
    };
  }

  async componentWillMount() {
    const languageCode = await Expo.DangerZone.Localization.getCurrentLocaleAsync();
    I18n.locale = languageCode;
    this.setState({ appIsReady: true });
  }

  render() {
    if (!this.state.appIsReady) {
      return (
        <View />
      );
    }
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
