import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  DashboardCategoryDetails,
  WelcomeDashboard,
  WelcomeScreen,
  Notifications,
  CreateReportFirstly,
  CreateReportSecondly,
  CreateReportFinaly,
} from '../../Screens';
const CreateReportStack = createStackNavigator();
const CreatReportStack = () => {
  return (
    <CreateReportStack.Navigator
      initialRouteName="FirstReport"
      screenOptions={{headerShown: false}}>
      <CreateReportStack.Screen
        name="FirstReport"
        component={CreateReportFirstly}
      />
      <CreateReportStack.Screen
        name="SecondReport"
        component={CreateReportSecondly}
      />
      <CreateReportStack.Screen
        name="FinalReport"
        component={CreateReportFinaly}
      />
    </CreateReportStack.Navigator>
  );
};

export default CreatReportStack;

const styles = StyleSheet.create({});
