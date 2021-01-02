import React from 'react';
import {I18nManager, StyleSheet, Text, View} from 'react-native';
import {
  BADGE_COLOR,
  FONT_22,
  STEP_NUMBER_HEIGHT,
  WHITE_COLOR,
} from '../../constants/design/colorsAndSizes';
import {CustomText} from '../customText';

const StepNumberAndReportName = ({
  step,
  containerStyle,
  textStyle,
  reportNameStyle,
  stepContainerStyle,
  reportName,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={[styles.stepContainer, stepContainerStyle]}>
        <CustomText text={step} textStyle={[styles.text, textStyle]} />
      </View>
      <CustomText
        text={reportName}
        textStyle={[styles.reportName, reportNameStyle]}
      />
    </View>
  );
};

export {StepNumberAndReportName};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  stepContainer: {
    width: 107,
    height: STEP_NUMBER_HEIGHT,

    backgroundColor: BADGE_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    marginEnd: 8,
    borderRadius: 0,
    borderTopEndRadius: 20,
    borderBottomEndRadius: 20,
  },
  text: {
    fontSize: FONT_22,
    fontWeight: '600',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: WHITE_COLOR,
  },
  reportName: {
    fontSize: FONT_22 - 2,
    fontWeight: '600',
    fontStyle: 'normal',
    color: '#263231',
  },
});
