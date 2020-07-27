import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './src/Login';
import Signup from './src/Signup';
import Dashboard from './src/Dashboard';

const AppNavigator = createStackNavigator(
  {
    Login: Login,
    Dashboard: Dashboard,
    Signup: Signup
  },
  {
    initialRouteName: "Login"
    }
);

export default createAppContainer(AppNavigator);