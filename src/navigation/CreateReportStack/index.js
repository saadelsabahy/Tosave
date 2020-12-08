import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {CreateReport} from '../../Screens';
const CreateReportStack = createStackNavigator();
const CreatReportStack = () => {
  return (
    <CreateReportStack.Navigator
      initialRouteName="CreateReport"
      screenOptions={{headerShown: false}}>
      <CreateReportStack.Screen name="CreateReport" component={CreateReport} />
    </CreateReportStack.Navigator>
  );
};

export default CreatReportStack;

const styles = StyleSheet.create({});
