import React, {useRef} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {
  Block,
  DialogueModal,
  Header,
  ReportSubHeader,
  StepNumberAndReportName,
} from '../../Components';
import {
  FONT_18,
  FONT_22,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  WHITE_COLOR,
} from '../../constants/design/colorsAndSizes';
import CreateMaintenenceReport from '../CreateReport/CreateMaintenenceReport';
import {HelpDeskReport} from './HelpDeskReport';
import IncidentsReport from './IncidentsReport';
import MaintenenceReport from './MaintenenceReport';
import {MonthlyAndRisk} from './MonthlyAndRisk';
import TrainingReport from './TrainingReport';
const ReportDetails = ({navigation, route}) => {
  const {category, date} = route.params;
  console.log(category);
  const repliesModalRef = useRef(null);
  const [showSignatureModal, setshowSignatureModal] = React.useState(false);
  const [signature, setsignature] = React.useState(null);

  const showSignatue = () => setshowSignatureModal(true);
  const hideSignature = () => {
    setshowSignatureModal(false);
  };

  const onConfirmSignature = (par) => {
    setsignature(par);
  };
  return (
    <View style={[styles.container]}>
      {['risks', 'monthly reports'].includes(category.toLowerCase()) && (
        <MonthlyAndRisk navigation={navigation} route={route} />
      )}
      {['training', 'first aid', 'evacuation'].includes(
        category.toLowerCase(),
      ) && <TrainingReport screenName={`${category} report`} />}

      {['maintenance'].includes(category.toLowerCase()) && (
        <MaintenenceReport category={`${category} report`} />
      )}
      {['incidents'].includes(category.toLowerCase()) && (
        <IncidentsReport category={`${category} report`} />
      )}
      {['help desk'].includes(category.toLowerCase()) && (
        <HelpDeskReport category={`${category} report`} />
      )}
    </View>
  );
};

export {ReportDetails};

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    alignItems: 'center',
    backgroundColor: WHITE_COLOR,
  },
});
