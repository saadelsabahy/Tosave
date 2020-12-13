import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  calcHeight,
  FONT_25,
  GREEN100,
  SCREEN_HEIGHT,
} from '../../constants/design/colorsAndSizes';
import {FilterIcon} from '../../Svgs';
import {CustomBottomSheet} from '../BottomSheet';
import {CustomButton} from '../CustomButton';
import {CustomText} from '../customText';
import {CalendarPickerRange} from '../DatePicker';
import {CustomDropdown} from '../DropDown';
import ResetButton from '../ResetButton';

const FilterModal = ({reference}) => {
  return (
    <CustomBottomSheet
      referance={reference}
      HeaderComponent={
        <View style={styles.headerContainer}>
          <View style={styles.headerIconAndTextContainer}>
            <FilterIcon />
            <CustomText text="filter" textStyle={styles.filterText} />
          </View>
          <ResetButton />
        </View>
      }
      FooterComponent={
        <View style={styles.buttonContainer}>
          <CustomButton buttonText="apply" />
        </View>
      }
      snapPoints={SCREEN_HEIGHT * 0.9}>
      <View style={styles.conentContainer}>
        <View style={styles.dropdownContainer}>
          <CustomDropdown />
        </View>
        <View style={styles.dropdownContainer}>
          <CustomDropdown />
        </View>

        <View style={styles.datepickerContainer}>
          <CalendarPickerRange />
        </View>
      </View>
    </CustomBottomSheet>
  );
};

export {FilterModal};

const styles = StyleSheet.create({
  conentContainer: {
    flex: 1,
    width: '95%',
    alignSelf: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: SCREEN_HEIGHT / 7,
    paddingStart: 20,
  },
  headerIconAndTextContainer: {flexDirection: 'row', alignItems: 'center'},
  dropdownContainer: {
    width: '100%',
    height: calcHeight(80),
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 0.7,
    borderColor: '#e4e4e4',
  },
  datepickerContainer: {
    marginVertical: 10,
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 11,
    shadowOpacity: 1,
    elevation: 2,
    backgroundColor: '#ffffff',
    height: 'auto',
    borderRadius: 10,
  },
  filterText: {
    fontSize: FONT_25,
    fontWeight: '600',
    fontStyle: 'normal',
    color: GREEN100,
    marginStart: 8,
  },
  buttonContainer: {marginBottom: 10, width: '95%'},
});
