import React from 'react';
import {
  I18nManager,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {
  FONT_16,
  INPUTS_AND_BUTTONS_HEIGHT,
  LOGIN_INPUT_BG,
  PLACEHOLDER,
  SCREEN_WIDTH,
  TEXT_BLACK,
} from '../../constants/design/colorsAndSizes';
import {CommentImageIcon} from '../../Svgs';

const CommentInput = ({
  containerStyle,
  inputStyle,
  loadImage,
  onLoadImagesPressed,
  ...props
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        placeholderTextColor={PLACEHOLDER}
        style={[styles.input, inputStyle]}
        {...props}
      />
      {loadImage && (
        <Pressable
          onPress={onLoadImagesPressed}
          style={({pressed}) => [{opacity: pressed ? 0.85 : 1}]}>
          <CommentImageIcon />
        </Pressable>
      )}
    </View>
  );
};

export default CommentInput;

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH - 20,
    height: INPUTS_AND_BUTTONS_HEIGHT,
    backgroundColor: LOGIN_INPUT_BG,
    borderRadius: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontFamily: 'Montserrat',
    fontSize: FONT_16,
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 22,
    letterSpacing: 0,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
    color: TEXT_BLACK,
  },
});
