import React from 'react';
import {I18nManager, StyleSheet, Text, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {
  GREEN100,
  GREEN50,
  SCREEN_WIDTH,
  TEXT_BLACK,
} from '../../constants/design/colorsAndSizes';
const WheelDatePicker = ({date = new Date(), onDateChange, style}) => {
  return (
    <View style={[styles.container]}>
      <DatePicker
        date={date}
        onDateChange={onDateChange}
        textColor={GREEN100}
        style={[styles.picker, style]}
        locale={I18nManager.isRTL ? 'ar' : 'en'}
        mode="datetime"
      />
    </View>
  );
};

export {WheelDatePicker};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    backgroundColor: GREEN50,
  },
  picker: {width: SCREEN_WIDTH},
});
