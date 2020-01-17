import React from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Home from './src/screens/home';
import Favourites from './src/screens/favourites';
import Upcoming from './src/screens/upcoming';

if (__DEV__) {
  import('./src/config/reactotron').then(() =>
    console.log('Reactotron Configured'),
  );
}

const TabNavigator = createBottomTabNavigator(
  {
    Favourites: Favourites,
    Home: Home,
    Upcoming: Upcoming,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Icon;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'movie';
        } else if (routeName === 'Favourites') {
          iconName = 'bookmark';
        } else if (routeName === 'Upcoming') {
          iconName = 'date-range';
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: '#b5b5b5',
      showLabel: false,
      style: { height: 55 },
    },
    initialRouteName: 'Home',
  },
);

export default createAppContainer(TabNavigator);
