import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

import {
  FONT_16,
  GREEN100,
  WHITE_COLOR,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from '../../constants/design/colorsAndSizes';
import {CustomText} from '../customText';
const CommentImadeAndDescriptionCard = ({
  commentImage,
  description,
  containerStyle,
  imageContainerStyle,
  detailesContainerStyle,
  descriptionStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      activeOpacity={0.9}
      onPress={onPress}>
      <View style={[styles.imageContainer, imageContainerStyle]}>
        <Image
          source={{
            uri: commentImage,
          }}
          style={styles.image}
        />
      </View>
      <View style={[styles.detailesContainer, detailesContainerStyle]}>
        <CustomText
          text={description}
          textStyle={[styles.description, descriptionStyle]}
        />
      </View>
    </TouchableOpacity>
  );
};

export {CommentImadeAndDescriptionCard};

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT / 3,
    backgroundColor: GREEN100,
    borderRadius: 20,
    overflow: 'hidden',
  },
  imageContainer: {
    width: '100%',
    height: '70%',
    backgroundColor: WHITE_COLOR,
    borderRadius: 20,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  detailesContainer: {
    flex: 1,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  description: {
    fontSize: FONT_16 - 1,
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 19,
    letterSpacing: 0,
    color: '#ffffff',
  },
});
