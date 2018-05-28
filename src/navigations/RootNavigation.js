import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import { Dimensions } from 'react-native';

// screens
import DrawerScreen from '../screens/DrawerScreen';
import MainScreen from '../screens/MainScreen';
import LoginScreen from '../screens/LoginScreen';

const RootNavigation = createStackNavigator({
  MainScreen: createDrawerNavigator({
    MainScreen: {
      screen: MainScreen,
    },
  }, {
    drawerWidth: Dimensions.get('window').width * 0.85,
    contentComponent: DrawerScreen,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    // navigationOptions: ({ navigation }) => ({
    navigationOptions: () => ({
      initialRouteName: 'MainScreen',
      header: null,
    }),
  }),
  LoginScreen: { screen: LoginScreen },
}, {
  initialRouteName: 'LoginScreen',
  navigationOptions: () => ({
    header: null,
  }),
});

export default RootNavigation;
