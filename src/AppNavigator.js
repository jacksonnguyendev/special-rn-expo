import React, { Component } from 'react';
import RootNavigation from './navigations/RootNavigation';
import NavigationService from '../src/navigations/NavigationService';

class AppNavigator extends Component {
  render() {
    return (
      <RootNavigation
        ref={(navigatorRef) => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    );
  }
}

export default AppNavigator;
