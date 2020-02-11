import React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";

import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import SplashScreen from '../pages/SplashScreen';
import TakeOff from './../pages/TakeOffPage';

const SwitchNavigator = createSwitchNavigator({
    Home: {
        screen:AppNavigator,
    },
    Auth: {
        screen:AuthNavigator
    },
    TakeOff: {
        screen:TakeOff,
    }, 
    SplashScreen: {
      screen:SplashScreen
    } 
    
  },
  {
      initialRouteName: 'SplashScreen',
  });
  
  export default createAppContainer(SwitchNavigator);