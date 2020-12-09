import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
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
    borderTopEndRadius: 10,
    borderBottomEndRadius: 10,
    backgroundColor: BADGE_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    marginEnd: 8,
  },
  text: {
    fontSize: FONT_22,
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 24,
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