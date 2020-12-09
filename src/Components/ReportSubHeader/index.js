import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  FONT_18,
  FONT_22,
  SCREEN_HEIGHT,
} from '../../constants/design/colorsAndSizes';
import {CustomText} from '../customText';
import {RepliesButton} from '../RepliesButton';

const ReportSubHeader = ({
  reportName,
  reportDate,
  repliesNumber,
  onRepliesButtonPressed,
}) => {
  return (
    <View style={[styles.reportHeaderContainer]}>
      <View style={[styles.textContainer]}>
        <CustomText text={reportName} textStyle={styles.reportName} />
        <CustomText text={reportDate} textStyle={styles.reportDate} />
      </View>
      <RepliesButton
        repliesNumber={repliesNumber}
        onPress={onRepliesButtonPressed}
      />
    </View>
  );
};

export {ReportSubHeader};

const styles = StyleSheet.create({
  reportName: {
    fontSize: FONT_22 + 1,
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: '#263231',
  },
  reportDate: {
    fontSize: FONT_18,
    fontWeight: '800',
    fontStyle: 'normal',
    color: '#777777',
  },
  reportHeaderContainer: {
    width: '95%',
    height: SCREEN_HEIGHT / 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    height: '100%',
    justifyContent: 'space-between',
  },
});
