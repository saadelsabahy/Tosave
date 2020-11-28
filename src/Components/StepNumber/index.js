import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  BADGE_COLOR,
  FONT_22,
  STEP_NUMBER_HEIGHT,
  WHITE_COLOR,
} from '../../constants/design/colorsAndSizes';
import {CustomText} from '../customText';

const StepNumber = ({step, containerStyle, textStyle}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <CustomText text={step} textStyle={[styles.text, textStyle]} />
    </View>
  );
};

export {StepNumber};

const styles = StyleSheet.create({
  container: {
    width: 107,
    height: STEP_NUMBER_HEIGHT,
    borderTopEndRadius: 10,
    borderBottomEndRadius: 10,
    backgroundColor: BADGE_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: FONT_22,
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: 0,
    color: WHITE_COLOR,
  },
});
