import React from 'react';
import {View, Text, StyleSheet, I18nManager} from 'react-native';
import {FONT_16} from '../../constants/design/colorsAndSizes';

const CustomText = ({text, textStyle, ...props}) => {
  return (
    <Text
      style={[
        styles.text,
        textStyle,
        {
          fontWeight: I18nManager.isRTL ? '100' : textStyle?.fontWeight,
          fontFamily: I18nManager.isRTL ? 'Cairo' : 'Montserrat',
        },
      ]}
      {...props}>
      {text}
    </Text>
  );
};
const styles = StyleSheet.create({
  text: {
    textTransform: 'capitalize',
    fontSize: FONT_16,
    writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',
    padding: 0,
    margin: 0,
  },
});

export {CustomText};
