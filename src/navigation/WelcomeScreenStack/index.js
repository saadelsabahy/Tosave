import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  DashboardCategoryDetails,
  WelcomeDashboard,
  WelcomeScreen,
  Notifications,
} from '../../Screens';
import CreatReportStack from '../CreateReportStack';
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
      <WelcomeStack.Screen
        name="DashboardCategory"
        component={DashboardCategoryDetails}
      />
      <WelcomeStack.Screen name="Notifications" component={Notifications} />
      <WelcomeStack.Screen name="CreateReport" component={CreatReportStack} />
    </WelcomeStack.Navigator>
  );
};

export default WelcomeStackNavigation;

const styles = StyleSheet.create({});
