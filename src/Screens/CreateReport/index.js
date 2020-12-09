import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from '../../constants/design/colorsAndSizes';
import CreateIncidentsReport from './CreateIncidentsReport';
import CreateMonthlyReport from './CreateMonthlyReport';
import CreateTrainingReport from './CreateTrainingReport';
const CreateReport = ({navigation, route}) => {
  const {category} = route.params;
  return (
    <View style={[styles.container]}>
      {['monthly reports', 'risks'].includes(category.toLowerCase()) && (
        <CreateMonthlyReport
          screenName={`create ${category} ${
            category.includes('report') ? '' : 'report'
          }`}
        />
      )}
      {['training'].includes(category.toLowerCase()) && (
        <CreateTrainingReport screenName={`create ${category} report`} />
      )}
      {['incidents'].includes(category.toLowerCase()) && (
        <CreateIncidentsReport screenName={`create ${category} report`} />
      )}
    </View>
  );
};

export {CreateReport};

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
});
