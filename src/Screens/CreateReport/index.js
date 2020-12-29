import React from 'react';
import {I18nManager, StyleSheet, Text, View} from 'react-native';
import {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from '../../constants/design/colorsAndSizes';
import CreateHelpDeskReport from './CreateHelpDeskReport';
import CreateIncidentsReport from './CreateIncidentsReport';
import CreateMaintenenceReport from './CreateMaintenenceReport';
import CreateMonthlyReport from './CreateMonthlyReport';
import CreateTrainingReport from './CreateTrainingReport';
import {useTranslation} from 'react-i18next';

const CreateReport = ({navigation, route}) => {
  const {t, i18n} = useTranslation();

  const {category, category_ar} = route.params;
  const CATEGORY = I18nManager.isRTL ? category_ar : category;
  return (
    <View style={[styles.container]}>
      {['monthly reports', 'risks'].includes(category.toLowerCase()) && (
        <CreateMonthlyReport
          screenName={`${t('createReport:create')} ${CATEGORY} ${
            category.includes('report') ? '' : 'report'
          }`}
        />
      )}
      {['training', 'evacuation', 'first aid'].includes(
        category.toLowerCase(),
      ) && (
        <CreateTrainingReport
          screenName={`${t('createReport:create')} ${category} report`}
        />
      )}
      {['incidents'].includes(category.toLowerCase()) && (
        <CreateIncidentsReport
          screenName={`${t('createReport:create')} ${CATEGORY} report`}
        />
      )}

      {['maintenance'].includes(category.toLowerCase()) && (
        <CreateMaintenenceReport
          screenName={`${t('createReport:create')} ${CATEGORY} report`}
        />
      )}
      {['help desk'].includes(category.toLowerCase()) && (
        <CreateHelpDeskReport
          screenName={`${t('createReport:create')} ${CATEGORY} report`}
        />
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
