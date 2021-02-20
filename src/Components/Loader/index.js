import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import {GREEN100, WHITE_COLOR} from '../../constants/design/colorsAndSizes';

const Loader = ({containerStyle, color}) => {
  return (
    <View style={[styles.cotainer, containerStyle]}>
      <ActivityIndicator color={color || GREEN100} size={'large'} animating />
    </View>
  );
};

export {Loader};

const styles = StyleSheet.create({
  cotainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: WHITE_COLOR,
  },
});
