import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  calcFont,
  calcHeight,
  calcWidth,
  FONT_18,
  GREEN100,
  GREEN50,
} from '../../constants/design/colorsAndSizes';
import {CustomText} from '../customText';

const TextContainer = ({containerStyle, text, textStyle}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <CustomText text={text} textStyle={[styles.innerText, textStyle]} />
    </View>
  );
};

export {TextContainer};

const styles = StyleSheet.create({
  container: {
    width: calcWidth(166),
    height: calcHeight(40),
    borderRadius: calcFont(9),
    backgroundColor: GREEN50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerText: {
    fontSize: FONT_18,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: GREEN100,
  },
});
