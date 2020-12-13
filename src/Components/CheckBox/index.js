import React, {useState, useCallback} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {
  calcFont,
  SCREEN_HEIGHT,
  TEXT_BLACK,
} from '../../constants/design/colorsAndSizes';
import {CheckedSvg, UnCheckedSvg} from '../../Svgs';
import {CustomText} from '../customText';
const CustomCheckBox = ({checked, disabeled, onChange, label, labelStyle}) => {
  const handleToggleCheck = useCallback(onChange, [checked]);
  return (
    <Pressable
      style={({pressed}) => [styles.container, {opacity: pressed ? 0.7 : 1}]}
      disabled={!onChange || disabeled}
      onPress={() => handleToggleCheck(!checked)}>
      {checked ? <CheckedSvg /> : <UnCheckedSvg />}
      {label && (
        <CustomText
          text={label}
          textStyle={[
            styles.text,
            {color: checked ? TEXT_BLACK : '#666'},
            labelStyle,
          ]}
        />
      )}
    </Pressable>
  );
};

export {CustomCheckBox};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginEnd: calcFont(10),
  },
  text: {
    marginStart: 5,
    fontSize: 15,
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: '#666666',
  },
});
