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
import {CustomText} from '../customText';

const CommentInput = ({
  containerStyle,
  inputStyle,
  loadImage,
  onLoadImagesPressed,
  name,
  error,
  ...props
}) => {
  return (
    <View>
      <View style={[styles.container, containerStyle]}>
        <TextInput
          placeholderTextColor={PLACEHOLDER}
          style={[styles.input, inputStyle]}
          name={name}
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
      {error?.message && (
        <CustomText text={error.message} textStyle={{color: 'red'}} />
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
    textAlign: I18nManager.isRTL ? 'right' : 'left',
    color: TEXT_BLACK,
  },
});
