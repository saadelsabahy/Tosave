import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  SCREEN_WIDTH,
  GREEN50,
  FONT_16,
  GREEN100,
  REPORT_HEADER_HEIGHT,
} from '../../constants/design/colorsAndSizes';
import {CustomText} from '../customText';

const ReportHeader = ({number, numberStyle, headerName, headerNameStyle}) => {
  return (
    <View style={styles.container}>
      <View style={styles.numberContainer}>
        <CustomText text={number} style={[styles.number, numberStyle]} />
      </View>
      <View style={styles.headerTextContainer}>
        <CustomText
          text={headerName}
          style={[styles.headerText, headerNameStyle]}
        />
      </View>
    </View>
  );
};

export {ReportHeader};

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH - 20,
    height: REPORT_HEADER_HEIGHT,
    borderRadius: 10,
    backgroundColor: GREEN50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  numberContainer: {
    width: 33,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#11a99d',
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    width: 6,
    height: 19,
    fontFamily: 'Montserrat',
    fontSize: 15,
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#ffffff',
  },
  headerTextContainer: {
    flex: 0.97,
    height: '100%',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: FONT_16,
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 19,
    letterSpacing: 0,
    color: GREEN100,
  },
});
