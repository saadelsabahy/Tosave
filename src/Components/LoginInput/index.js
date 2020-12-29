import React from 'react';
import {StyleSheet, Text, View, I18nManager} from 'react-native';
import {
  TextInput,
  DarkTheme,
  HelperText,
  configureFonts,
} from 'react-native-paper';
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

const fonts = {
  regular: {
    fontFamily: I18nManager.isRTL ? 'Cairo' : 'Montserrat',
  },
  medium: {
    fontFamily: I18nManager.isRTL ? 'Cairo' : 'Montserrat',
  },
  thin: {
    fontFamily: I18nManager.isRTL ? 'Cairo' : 'Montserrat',
  },
  light: {
    fontFamily: I18nManager.isRTL ? 'Cairo' : 'Montserrat',
  },
};
const LoginInput = ({
  label,
  inputContainerStyle,
  inputStyle,
  referance,
  errorText,
  containerStyle = {},
  name,
  ...props
}) => {
  const theme = {
    ...DarkTheme,
    roundness: 5,
    fonts: configureFonts({
      ios: fonts,
      android: fonts,
    }),
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
    <View style={[containerStyle]}>
      <View style={[styles.inputContainer, inputContainerStyle]}>
        <TextInput
          label={
            label
              ? `${label.substring(0, 1).toUpperCase()}${label.substring(1)}`
              : ''
          }
          style={[styles.input, inputStyle]}
          theme={theme}
          underlineColor="transparent"
          enablesReturnKeyAutomatically
          ref={referance}
          name={name}
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
    fontFamily: I18nManager.isRTL ? 'Cairo' : 'Montserrat',
    fontWeight: I18nManager.isRTL ? '100' : '600',
  },
});
