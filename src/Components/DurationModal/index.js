import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {
  calcFont,
  calcHeight,
  calcWidth,
  FONT_25,
  GREEN100,
  GREEN50,
  SCREEN_HEIGHT,
} from '../../constants/design/colorsAndSizes';
import {DurationIcon, MonthlyCalendarIcon, ResetIcon} from '../../Svgs';
import {Block} from '../Block';
import {CustomBottomSheet} from '../BottomSheet';
import {CustomButton} from '../CustomButton';
import {CustomText} from '../customText';
import {CalendarPickerRange} from '../DatePicker';
import ResetButton from '../ResetButton';

const DurationModal = ({
  reference,
  calenderRef,
  onDateChange,
  selectedStartDate,
  selectedEndDate,
  buttonText,
  onApplyPressed,
}) => {
  /*   const calenderRef = React.useRef(null);
  const [selectedStartDate, setselectedStartDate] = React.useState(null);
  const [selectedEndDate, setselectedEndDate] = React.useState(null);
  const onDateChange = (date, type) => {
    console.log(date, type);
    if (type === 'END_DATE') {
      setselectedEndDate(date);
    } else {
      setselectedStartDate(date);
      setselectedEndDate(null);
    }
  };
  const resetSelectedRange=()=>{
   setselectedEndDate(null);
   setselectedStartDate(null);
   calenderRef.current.resetSelections(); 
  } */
  return (
    <CustomBottomSheet referance={reference} snapPoints={SCREEN_HEIGHT * 0.65}>
      <View style={[styles.header]}>
        <View style={[{flexDirection: 'row', alignItems: 'center'}]}>
          <DurationIcon />
          <CustomText text={'duration'} textStyle={[styles.headerText]} />
        </View>
        <ResetButton />
      </View>
      <Block containerStyle={[styles.block]}>
        <CalendarPickerRange
          onDateChange={onDateChange}
          allowRangeSelection
          referance={calenderRef}
          selectedStartDate={selectedStartDate}
          selectedEndDate={selectedEndDate}
        />
        <View style={[styles.buttonContainer]}>
          <CustomButton
            buttonText={buttonText || 'apply'}
            onPress={onApplyPressed}
          />
        </View>
      </Block>
    </CustomBottomSheet>
  );
};

export {DurationModal};

const styles = StyleSheet.create({
  block: {
    overflow: 'hidden',
    height: 'auto',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  header: {
    width: '95%',
    alignSelf: 'flex-end',
    height: SCREEN_HEIGHT / 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: FONT_25,
    fontWeight: '600',
    fontStyle: 'normal',
    color: GREEN100,
    marginStart: 10,
  },
  buttonContainer: {
    width: '100%',
    justifyContent: 'center',
  },
});
