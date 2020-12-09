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
import {MonthlyAndRisk} from './MonthlyAndRisk';
const ReportDetails = ({navigation, route}) => {
  const {category, date} = route.params;
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
      <MonthlyAndRisk navigation={navigation} route={route} />
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
