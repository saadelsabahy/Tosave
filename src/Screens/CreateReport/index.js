import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from '../../constants/design/colorsAndSizes';
import CreateHelpDeskReport from './CreateHelpDeskReport';
import CreateIncidentsReport from './CreateIncidentsReport';
import CreateMaintenenceReport from './CreateMaintenenceReport';
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
      {['training', 'evacuation', 'first aid'].includes(
        category.toLowerCase(),
      ) && <CreateTrainingReport screenName={`create ${category} report`} />}
      {['incidents'].includes(category.toLowerCase()) && (
        <CreateIncidentsReport screenName={`create ${category} report`} />
      )}

      {['maintenance'].includes(category.toLowerCase()) && (
        <CreateMaintenenceReport screenName={`create ${category} report`} />
      )}
      {['help desk'].includes(category.toLowerCase()) && (
        <CreateHelpDeskReport screenName={`create ${category} report`} />
      )}
    </View>
  );
};

export {CreateReport};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
