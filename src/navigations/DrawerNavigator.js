import React, { Component } from "react";
import SideBar from "./../components/SideBar";
import { DrawerNavigator } from "react-navigation";
const DrawerNavigator = DrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Chat: { screen: MainScreenNavigator },
    Profile: { screen: Profile }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default DrawerNavigator;