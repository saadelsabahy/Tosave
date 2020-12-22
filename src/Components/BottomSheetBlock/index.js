import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {
  calcFont,
  SCREEN_WIDTH,
  WHITE_COLOR,
} from '../../constants/design/colorsAndSizes';

const BottomSheetContainer = ({
  children,
  containerStyle,
  contentContainerStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={[styles.contentContainer, contentContainerStyle]}>
        {children}
      </View>
    </View>
  );
};

export {BottomSheetContainer};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: SCREEN_WIDTH,
    backgroundColor: WHITE_COLOR,
    /* shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 11,
    shadowOpacity: 1, */
    justifyContent: 'center',
    alignItems: 'center',
    borderTopEndRadius: calcFont(40),
    borderTopStartRadius: calcFont(40),
  },
  contentContainer: {height: '90%', width: '90%'},
});
