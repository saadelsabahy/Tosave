import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  FONT_13,
  REPORT_HEADER_HEIGHT,
  SCREEN_WIDTH,
} from '../../constants/design/colorsAndSizes';
import {CustomText} from '../customText';

const DamageType = ({containerStyle, textStyle, type}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <CustomText text={type} textStyle={[styles.text, textStyle]} />
    </View>
  );
};

export {DamageType};

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH / 5,
    height: REPORT_HEADER_HEIGHT,
    borderRadius: 10,
    backgroundColor: '#E9EAEA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: FONT_13 + 1,
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 18,
    letterSpacing: 0,
    color: '#263231',
  },
});
