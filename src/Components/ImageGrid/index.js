import React from 'react';
import {Text, View, Image, Pressable, StyleSheet} from 'react-native';
import {
  calcHeight,
  calcWidth,
  FONT_13,
  FONT_18,
  GREEN50,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  WHITE_COLOR,
} from '../../constants/design/colorsAndSizes';
import {
  IMAGE_LENGTH,
  IMAGE_GRID_COLUMNS,
} from '../../constants/ConstantsVariables';
import {CameraIcon, DeleteIcon} from '../../Svgs';
import {CustomText} from '../customText';
import {FlatList} from 'react-native-gesture-handler';
const ImageItem = ({
  image,
  onPress,
  index,
  onDeleteImagePressed,
  imageContainerStyle,
}) => {
  return image ? (
    <Pressable
      style={({pressed}) => [
        styles.image_view,
        {opacity: pressed ? 0.7 : 1},
        imageContainerStyle,
      ]}
      onPress={() => onPress(image, index)}>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{
          uri: image,
        }}
      />
      <Pressable
        style={({pressed}) => [
          styles.deleteImageIcon,
          {opacity: pressed ? 0.8 : 1},
        ]}
        onPress={() => onDeleteImagePressed(index)}>
        <DeleteIcon width={20} height={20} />
      </Pressable>
    </Pressable>
  ) : (
    <View />
  );
};

const ImageGrid = ({
  images = [],
  containerStyle,
  addImagesText,
  onDeleteImagePressed,
  onImagePressed,
  deleteImagesText,
  imageContainerStyle,
  placeholderText,
  onAddImagesPressed,
  onDeleteAllImagesPressed,
  name,
  small,
  emptyContainerStyle,
}) => {
  return images.length > 0 ? (
    <View
      style={[
        styles.container,
        {
          width: small ? calcWidth(183) : SCREEN_WIDTH - 20,
          height: small ? calcHeight(203) : SCREEN_HEIGHT / 3,
        },
        ,
        containerStyle,
      ]}>
      <FlatList
        style={[styles.imagesFlatList]}
        columnWrapperStyle={{
          flex: 1,
          justifyContent:
            IMAGE_LENGTH % IMAGE_GRID_COLUMNS == 0
              ? 'flex-start'
              : 'space-around',
        }}
        data={images}
        numColumns={IMAGE_GRID_COLUMNS}
        keyExtractor={(item, index) => `${item}${index}`}
        renderItem={({item, index}) => {
          console.log(item);
          return (
            <ImageItem
              image={item}
              key={`${index} ${item}`}
              onPress={onImagePressed}
              index={index}
              onDeleteImagePressed={(index) =>
                onDeleteImagePressed(index, name)
              }
              style={[imageContainerStyle]}
            />
          );
        }}
      />
      <View style={[styles.buttonsContainer]}>
        <Pressable
          style={({pressed}) => [styles.button, {opacity: pressed ? 0.7 : 1}]}
          onPress={() => onAddImagesPressed(name)}>
          <CameraIcon width={25} height={25} />
          <CustomText text={addImagesText} style={[styles.buttonText]} />
        </Pressable>
        <View style={[styles.divider]} />
        <Pressable
          style={({pressed}) => [styles.button, {opacity: pressed ? 0.7 : 1}]}
          onPress={() => onDeleteAllImagesPressed(name)}>
          <DeleteIcon width={25} height={25} />
          <CustomText text={deleteImagesText} textStyle={[styles.buttonText]} />
        </Pressable>
      </View>
    </View>
  ) : (
    <View
      style={[
        styles.container,
        {
          width: small ? calcWidth(183) : SCREEN_WIDTH - 20,
          height: small ? calcHeight(203) : SCREEN_HEIGHT / 3,
        },
        emptyContainerStyle,
      ]}>
      <Pressable
        style={({pressed}) => [
          styles.emptyPickContainer,
          {opacity: pressed ? 0.7 : 1},
        ]}
        onPress={() => onAddImagesPressed(name)}>
        <CameraIcon />
        <CustomText text={placeholderText} textStyle={[styles.placeholder]} />
      </Pressable>
    </View>
  );
};
export {ImageGrid};
export const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH - 20,
    height: SCREEN_HEIGHT / 3,
    borderRadius: 20,
    backgroundColor: WHITE_COLOR,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#dfdfdf',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    marginEnd: 5,
  },
  emptyPickContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholder: {
    fontSize: FONT_13,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 18,
    letterSpacing: 0,
    color: '#a0a0a0',
    marginTop: 10,
  },

  image_view: {
    width: '30%',
    height: 55,
    margin: 5,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: GREEN50,
  },

  image: {
    width: '100%',
    height: '100%',
    borderRadius: 6,
    backgroundColor: WHITE_COLOR,
  },
  deleteImageIcon: {
    position: 'absolute',
    top: 0,
    end: 0,
    margin: 0,
    borderBottomStartRadius: 5,
    borderRadius: 0,
    width: 'auto',
    height: 'auto',
    padding: 2,
    backgroundColor: WHITE_COLOR,
  },
  buttonsContainer: {
    flex: 1,

    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  divider: {
    width: 0.9,
    height: '100%',
    backgroundColor: '#a0a0a0',
  },
  imagesFlatList: {
    width: '95%',
    height: '70%',
  },
  buttonText: {
    fontSize: FONT_18,
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 22,
    letterSpacing: 0,
    color: '#a0a0a0',
  },
});
