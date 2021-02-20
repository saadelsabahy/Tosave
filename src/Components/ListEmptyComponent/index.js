import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {
  SCREEN_WIDTH,
  WHITE_COLOR,
  GREEN100,
} from '../../constants/design/colorsAndSizes';
import {CustomText} from '../customText';

const EmptyList = ({iconSize, emptyText}) => {
  return (
    <View style={styles.container}>
      <Icon name={'exclamation'} size={iconSize || 40} color={GREEN100} />
      <CustomText text={emptyText} textStyle={styles.text} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: WHITE_COLOR,
    width: SCREEN_WIDTH,
  },
  text: {
    letterSpacing: 1,
    marginVertical: 5,
  },
});

export {EmptyList};
