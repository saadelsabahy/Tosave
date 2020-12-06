import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput, DarkTheme, HelperText} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  LOGIN_INPUT_BG,
  PLACEHOLDER,
  SCREEN_HEIGHT,
  INPUTS_AND_BUTTONS_HEIGHT,
  TEXT_BLACK,
  FONT_18,
} from '../../constants/design/colorsAndSizes';
import {CustomText} from '../customText';
const LoginInput = ({
  label,
  inputContainerStyle,
  inputStyle,
  referance,
  errorText,
  ...props
}) => {
  const theme = {
    ...DarkTheme,
    roundness: 5,
    colors: {
      ...DarkTheme.colors,
      text: TEXT_BLACK,
      placeholder: PLACEHOLDER,
      primary: PLACEHOLDER,
      background: LOGIN_INPUT_BG,
      roundess: 20,
    },
  };
  return (
    <View>
      <View style={[styles.inputContainer, inputContainerStyle]}>
        <TextInput
          label={`${label.substring(0, 1).toUpperCase()}${label.substring(1)}`}
          style={[styles.input, inputStyle]}
          theme={theme}
          underlineColor="transparent"
          enablesReturnKeyAutomatically
          ref={referance}
          {...props}
        />
      </View>
      {errorText && (
        <View style={{width: '95%', alignSelf: 'center'}}>
          <CustomText text={errorText} textStyle={{color: 'red'}} />
        </View>
      )}
    </View>
  );
};

export {LoginInput};
const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    borderRadius: 20,
    height: INPUTS_AND_BUTTONS_HEIGHT,
    overflow: 'hidden',
    backgroundColor: LOGIN_INPUT_BG,
  },
  input: {
    borderRadius: 0,
    backgroundColor: LOGIN_INPUT_BG,
    height: INPUTS_AND_BUTTONS_HEIGHT + 4,
    overflow: 'hidden',
    fontSize: FONT_18,
    fontFamily: 'Montserrat',
    fontWeight: '600',
  },
});
