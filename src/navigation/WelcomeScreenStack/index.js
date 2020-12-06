import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {WelcomeDashboard, WelcomeScreen} from '../../Screens';
const WelcomeStack = createStackNavigator();
const WelcomeStackNavigation = () => {
  return (
    <WelcomeStack.Navigator
      initialRouteName="Welcome"
      screenOptions={{headerShown: false}}>
      <WelcomeStack.Screen name="Welcome" component={WelcomeScreen} />
      <WelcomeStack.Screen
        name="WelcomeDashboard"
        component={WelcomeDashboard}
      />
    </WelcomeStack.Navigator>
  );
};

export default WelcomeStackNavigation;

const styles = StyleSheet.create({});
