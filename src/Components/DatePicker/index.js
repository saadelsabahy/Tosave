import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import CalendarPicker from './CalendarPicker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  GREEN100,
  GREEN50,
  WHITE_COLOR,
} from '../../constants/design/colorsAndSizes';
import {DatePickerArrowRight} from '../../Svgs';
const CalendarPickerRange = ({
  allowRangeSelection,
  selectedStartDate,
  selectedEndDate,
  minDate,
  maxDate,
  onDateChange,
  startFromMonday,
  referance,
  ...props
}) => {
  /*   const onDateChange = (date, type) => {
    console.log(date, type);
    if (type === 'END_DATE') {
      setselectedEndDate(date);
    } else {
      setselectedStartDate(date);
      setselectedEndDate(null);
    }
  }; */

  return (
    <>
      <CalendarPicker
        ref={referance}
        allowRangeSelection={allowRangeSelection}
        selectedStartDate={selectedStartDate}
        selectedEndDate={selectedEndDate}
        minDate={minDate}
        maxDate={maxDate}
        todayBackgroundColor={'transparent'}
        selectedDayColor={'#DCF2F0'}
        selectedDayTextColor={GREEN100}
        onDateChange={onDateChange}
        scrollable={false}
        headingLevel={0}
        customDayHeaderStyles={() => {
          return {
            textStyle: styles.headerTextStyle,
          };
        }}
        previousComponent={
          <Icon
            name="arrow-left"
            size={25}
            style={styles.controllsContainer}
            color={WHITE_COLOR}
          />
        }
        nextComponent={
          <Icon
            name="arrow-right"
            style={styles.controllsContainer}
            size={25}
            color={WHITE_COLOR}
          />
        }
        dayShape={'square'}
        dayLabelsWrapper={styles.drawLabelsWrapper}
        textStyle={styles.text}
        {...props}
      />
    </>
  );
};

export {CalendarPickerRange};

const styles = StyleSheet.create({
  drawLabelsWrapper: {
    borderBottomWidth: 0,
    borderTopWidth: 0,
    padding: 0,
    margin: 0,
  },
  text: {
    fontFamily: 'Montserrat',
    fontSize: 15,
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 19,
    letterSpacing: 0,
  },
  controllsContainer: {
    borderRadius: 3,
    backgroundColor: '#34B6AC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTextStyle: {
    fontSize: 13,
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 16,
    letterSpacing: 0,
    color: '#aaaaaa',
    fontFamily: 'Montserrat',
  },
});
