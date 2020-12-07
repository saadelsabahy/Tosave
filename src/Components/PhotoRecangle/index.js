import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {FONT_13, WHITE_COLOR} from '../../constants/design/colorsAndSizes';
import {CameraIcon} from '../../Svgs';
import {CustomText} from '../customText';

const PhotoRecangle = ({
  onAvatarPressed,
  containerStyle,
  imageStyle,
  pickIcon,
  uri,
  pickText,
}) => {
  return (
    <Pressable
      style={[styles.container, containerStyle]}
      onPress={onAvatarPressed}>
      <Image
        source={{
          uri:
            uri ||
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL9sgyzDD2lq2-gQ8y3TNBwpGVFgwTiyCpVg&usqp=CAU',
        }}
        style={[styles.image, imageStyle]}
      />
      {pickIcon && (
        <View style={[styles.pickIconContainer]}>
          <CameraIcon fill={WHITE_COLOR} />
          <CustomText text={pickText} textStyle={[styles.pickText]} />
        </View>
      )}
    </Pressable>
  );
};

export default PhotoRecangle;

const styles = StyleSheet.create({
  container: {
    width: 55,
    height: 55,
    opacity: 0.78,
    borderRadius: 17,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#11a99d',
    overflow: 'hidden',
    padding: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 17,
    backgroundColor: WHITE_COLOR,
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 6,
    shadowOpacity: 1,
  },
  pickIconContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.5)',
    borderRadius: 17,
  },
  pickText: {
    fontSize: FONT_13,
    fontWeight: '600',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#ffffff',
  },
});
