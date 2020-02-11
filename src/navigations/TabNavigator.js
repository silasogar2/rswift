/* eslint-disable prettier/prettier */
import React from "react";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import PageContact from "./../pages/PageContact";
import PageMessages from "./../pages/PageMessages";
import PageVoice from "./../pages/PageVoice";
import PageVideo from "./../pages/PageVideo";
import PageFunds from "./../pages/PageFunds";
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
const TabNavigator = createMaterialBottomTabNavigator({
    PageContact: {
      screen:PageContact,
      navigationOptions: {
          tabBarLabel: 'Contacts',
          // header:<HomeHeader/>,
          
          tabBarOptions: { 
              activeTintColor: '#F0DFE4',
              inactiveTintColor: '#65D1F8',
          },
          tabBarIcon: ({focused}) => (
            <Icon name={focused ? 'ios-contact' : 'ios-contact'} size={32} color={focused ? '#F0DFE4' : '#F798B3'} /> 
          )
      }
  },
  PageMessages: {
    screen:PageMessages,
    navigationOptions: {
        tabBarLabel: 'Messages',
        tabBarOptions: { 
          activeTintColor: '#F0DFE4',
          inactiveTintColor: '#65D1F8',
        },
        tabBarIcon: ({focused}) => (
          <Icon name="ios-chatboxes" size={32} color={focused ? '#F0DFE4' : '#F798B3'} /> 
        )
    }
},
PageVoice: {
    screen:PageVoice,
    navigationOptions: {
        tabBarLabel: 'Voice Call',
        tabBarOptions: { 
          activeTintColor: '#F0DFE4',
          inactiveTintColor: '#65D1F8',
        },
        tabBarIcon: ({focused}) => (
          <Icon name="ios-call" size={32} color={focused ? '#F0DFE4' : '#F798B3'} /> 
        )
    }
},
PageVideo:{
    screen:PageVideo,
    navigationOptions: {
        tabBarLabel: 'Video',
        tabBarOptions: { 
          activeTintColor: '#F0DFE4',
          inactiveTintColor: '#65D1F8',
        },
        tabBarIcon: ({focused}) => (
          <Icon name="ios-videocam" size={32} color={focused ? '#F0DFE4' : '#F798B3'}/> 
        )
    }
},
PageFunds:{
    screen:PageFunds,
    navigationOptions: {
        tabBarLabel: 'Funds',
        tabBarOptions: { 
          activeTintColor: '#67eacd',
          inactiveTintColor: '#65D1F8',
        },
        tabBarIcon: ({focused}) => (
          <Icon name="ios-wallet" size={32} color={focused ? '#F0DFE4' : '#F798B3'} /> 
        )
    }
},
}, 
{
    
    activeColor: '#fff',
    inactiveColor: '#fff',
    barStyle: { backgroundColor: '#7F0327' },
  });

export default createAppContainer(TabNavigator);

