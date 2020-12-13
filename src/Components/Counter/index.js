import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  calcFont,
  calcHeight,
  calcWidth,
  TEXT_BLACK,
} from '../../constants/design/colorsAndSizes';
import {AddIcon} from '../../Svgs';
import {CustomText} from '../customText';

const Counter = ({onAddPress, onMinusPress, text, containerStyle}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Pressable style={styles.minusContainer} onPress={onMinusPress}>
        <Icon name="minus" color={TEXT_BLACK} size={calcFont(30)} />
      </Pressable>
      <CustomText text={text} textStyle={styles.counterText} />
      <AddIcon onPress={onAddPress} />
    </View>
  );
};

export {Counter};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  minusContainer: {
    width: calcWidth(50),
    height: calcHeight(50),
    borderRadius: calcFont(15),
    backgroundColor: '#D3D6D5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterText: {
    fontSize: 33,
    fontWeight: 'bold',
    color: '#11a99d',
    marginStart: 12,
  },
});
