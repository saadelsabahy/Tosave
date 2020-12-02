import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SCREEN_WIDTH, WHITE_COLOR} from '../../constants/design/colorsAndSizes';

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
    flex: 1,
    width: SCREEN_WIDTH,
    backgroundColor: WHITE_COLOR,
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 11,
    shadowOpacity: 1,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {height: '90%', width: '90%'},
});
