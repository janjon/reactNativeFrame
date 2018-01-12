import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons';

import Login from '../containers/login'
import AboutPage from '../containers/about'
import HomePage from '../containers/home'

// see here for options: https://reactnavigation.org/docs/navigators/tab
const TabNavigation = TabNavigator({
  HomePage: {
    screen: HomePage,
    navigationOptions: ({navigation}) => ({  
      tabBarLabel:'首页',  
      tabBarIcon:({focused,tintColor}) => (  
        <Ionicons name='ios-home-outline' />
      )
    }),
  },
  AboutPage: {
    screen: AboutPage,
    navigationOptions: ({navigation}) => ({  
      tabBarLabel:'关于',  
      tabBarIcon:({focused,tintColor}) => (  
        <Ionicons name='ios-link-outline' />
      )
    }),
  },
}, {
  animationEnabled: true,
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  backBehavior: 'none',
});

// add your router below
const Navigation = StackNavigator({
  Main: { screen: TabNavigation },
});

export default Navigation