import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import {
  GREEN100,
  FONT_22,
  INPUTS_AND_BUTTONS_HEIGHT,
  calcFont,
} from '../../constants/design/colorsAndSizes';
import {CustomText} from '../customText';
const CustomButton = ({
  buttonText,
  buttonStyle,
  buttonColor,
  buttonTextStyle,
  containerStyle,
  ...props
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Button
        mode="contained"
        contentStyle={[styles.button, buttonStyle]}
        color={buttonColor || GREEN100}
        {...props}>
        <CustomText
          text={buttonText}
          textStyle={[styles.text, buttonTextStyle]}
        />
      </Button>
    </View>
  );
};

export {CustomButton};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: INPUTS_AND_BUTTONS_HEIGHT,
    backgroundColor: 'red',
    overflow: 'hidden',
    borderRadius: calcFont(20),
  },
  button: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    padding: 0,
    margin: 0,
  },
  text: {
    fontSize: FONT_22,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#ffffff',
    margin: 0,
  },
});
