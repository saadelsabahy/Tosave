import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {WHITE_COLOR} from '../../constants/design/colorsAndSizes';

const Handle = ({handleStyle}) => {
  return <View style={[styles.handle, handleStyle]} />;
};

export {Handle};

const styles = StyleSheet.create({
  handle: {
    width: 68,
    height: 6,
    borderRadius: 3,
    backgroundColor: WHITE_COLOR,
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 11,
    shadowOpacity: 1,
    alignSelf: 'center',
    marginBottom: 5,
  },
});
