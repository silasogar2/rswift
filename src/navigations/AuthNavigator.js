/* eslint-disable prettier/prettier */
import React from 'react';
import { createAppContainer } from 'react-navigation';
import AppNavigator from './AppNavigator';
import { createStackNavigator } from 'react-navigation-stack'
import Signup from './../pages/Signup';
import Login from './../pages/Login';
import ConfirmCode from './../pages/ConfirmCode';

const AuthNavigator = createStackNavigator(
  {
    Signup: {
        screen: Signup,
        navigationOptions: { header: null },
    },
    Login: { 
        screen: Login,
        navigationOptions: { header: null },
    },
    ConfirmCode: { 
        screen: ConfirmCode,
        navigationOptions: { header: null },
    },
    AppNavigator: { 
        screen: AppNavigator,
        navigationOptions: { header: null },
    },
  },
  {
    initialRouteName: 'Login',
  }
);


export default createAppContainer(AuthNavigator);
