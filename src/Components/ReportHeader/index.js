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

const ReportHeader = ({
  number,
  numberStyle,
  headerName,
  headerNameStyle,
  containerStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {number && (
        <View style={styles.numberContainer}>
          <CustomText text={number} style={[styles.number, numberStyle]} />
        </View>
      )}
      <View style={styles.headerTextContainer}>
        <CustomText
          text={headerName}
          textStyle={[
            styles.headerText,
            {marginStart: number ? 0 : 10},
            headerNameStyle,
          ]}
        />
      </View>
    </View>
  );
};

export {ReportHeader};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: SCREEN_WIDTH - 20,
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
    fontFamily: 'Montserrat',
    fontSize: 15,
    fontWeight: '600',
    fontStyle: 'normal',
    color: '#ffffff',
  },
  headerTextContainer: {
    flex: 0.97,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  headerText: {
    fontSize: FONT_16,
    fontWeight: '600',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: GREEN100,
  },
});
