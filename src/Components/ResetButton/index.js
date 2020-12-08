import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {
  calcFont,
  calcHeight,
  GREEN100,
  GREEN50,
} from '../../constants/design/colorsAndSizes';
import {ResetIcon} from '../../Svgs';
import {CustomText} from '../customText';

const ResetButton = ({
  resetText,
  resetTextStyle,
  resetContainerStyle,
  onPress,
}) => {
  return (
    <Pressable
      style={[styles.container, resetContainerStyle]}
      onPress={onPress}>
      <ResetIcon />
      <CustomText
        text={resetText || 'Reset to defualt'}
        onPress={() => {
          /* console.log('reset');
                calenderRef.current.resetSelections(); */
        }}
        textStyle={[styles.resetText, resetTextStyle]}
      />
    </Pressable>
  );
};

export default ResetButton;

const styles = StyleSheet.create({
  container: {
    paddingStart: 5,
    height: calcHeight(43),
    backgroundColor: GREEN50,
    borderTopStartRadius: 20,
    borderBottomStartRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  resetText: {
    fontSize: calcFont(11),
    fontWeight: '600',
    fontStyle: 'normal',
    color: GREEN100,
    marginHorizontal: 5,
  },
});
