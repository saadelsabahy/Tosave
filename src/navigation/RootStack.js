import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {Login} from '../Screens';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="SignInScreen" component={Login} />
  </RootStack.Navigator>
);

export default RootStackScreen;
