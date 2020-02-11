/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Root } from 'native-base';
import slash from './src/pages/SplashScreen';
import SwitchNav from './src/navigations/SwitchNavigator';
export default class App extends React.Component{
    render(){
      return (
        <Root>
          <SwitchNav  navigation={this.props.navigation} />
        </Root>
          
        );
    }
}
  
