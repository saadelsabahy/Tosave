import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput, DarkTheme} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  LOGIN_INPUT_BG,
  PLACEHOLDER,
  SCREEN_HEIGHT,
  INPUTS_AND_BUTTONS_HEIGHT,
  TEXT_BLACK,
  FONT_18,
} from '../../constants/design/colorsAndSizes';
const LoginInput = ({label, inputContainerStyle, inputStyle, ...props}) => {
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
    <View style={[styles.inputContainer, inputContainerStyle]}>
      <TextInput
        label={label}
        style={[styles.input, inputStyle]}
        theme={theme}
        underlineColor="transparent"
        /*  right={
          <TextInput.Icon
            name={() => <Ionicons name={'eye-outline'} size={20} />}
          />
        } */
        {...props}
      />
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
    height: INPUTS_AND_BUTTONS_HEIGHT + 10,
    overflow: 'hidden',
    fontSize: FONT_18,
    fontFamily: 'Montserrat',
    fontWeight: '600',
  },
});
