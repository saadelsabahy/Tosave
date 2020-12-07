import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SegmentedControl from '@react-native-community/segmented-control';
import {
  FONT_16,
  GREEN100,
  WHITE_COLOR,
  GREEN50,
  SEGMENT_HEIGHT,
} from '../../constants/design/colorsAndSizes';
const Segment = ({values = [], selectedIndex, onChange}) => {
  return (
    <View style={[styles.container]}>
      <SegmentedControl
        values={values?.map((item) => item[0].toUpperCase() + item.slice(1))}
        selectedIndex={selectedIndex || 0}
        onChange={
          onChange /* (event) => {
          setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
        } */
        }
        fontStyle={styles.font}
        tintColor={GREEN100}
        backgroundColor={GREEN50}
        enabled
        style={[styles.segment]}
        momentary
        activeFontStyle={{color: WHITE_COLOR}}
      />
    </View>
  );
};

export {Segment};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: SEGMENT_HEIGHT,
  },
  segment: {height: '100%', borderRadius: 20, elevation: 0, margin: 0},
  font: {
    fontFamily: 'Montserrat',
    fontSize: FONT_16,
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 19,
    letterSpacing: 0,
    color: GREEN100,
    textTransform: 'capitalize',
  },
});
