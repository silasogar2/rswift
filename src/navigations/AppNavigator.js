/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import Home from './../pages/Home';
import { createStackNavigator } from 'react-navigation-stack'
import TabNavigator from './TabNavigator';

// import Main from './SwitchNavigator';

const AppNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    TabNavigator: { 
      screen: TabNavigator,
      navigationOptions: { header: null },
    },
   
  },
  {
    initialRouteName: 'TabNavigator',
  }
);

export default createAppContainer(AppNavigator);
