import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from '../../constants/design/colorsAndSizes';

const Block = ({containerStyle, children}) => {
  return <View style={[styles.container, containerStyle]}>{children}</View>;
};

export {Block};

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH * 0.95,
    height: SCREEN_HEIGHT,
  },
});
