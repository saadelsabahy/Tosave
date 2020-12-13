import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  FONT_25,
  GREEN100,
  SCREEN_HEIGHT,
} from '../../constants/design/colorsAndSizes';
import {PlusIcon} from '../../Svgs';
import {CustomBottomSheet} from '../BottomSheet';
import {Counter} from '../Counter';
import {CustomButton} from '../CustomButton';
import {CustomText} from '../customText';
import {CustomDropdown} from '../DropDown';

const AddNewItemModal = ({reference}) => {
  return (
    <CustomBottomSheet
      referance={reference}
      snapPoints={SCREEN_HEIGHT * 0.6}
      HeaderComponent={
        <View style={styles.headerIconAndTextContainer}>
          <PlusIcon />
          <CustomText text="add new item" textStyle={styles.filterText} />
        </View>
      }
      FooterComponent={
        <View style={styles.buttonContainer}>
          <CustomButton buttonText="apply" />
        </View>
      }>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-evenly',
          height: SCREEN_HEIGHT * 0.4,
        }}>
        <View style={styles.dropdownContainer}>
          <CustomDropdown />
        </View>

        <View style={styles.dropdownContainer}>
          <CustomDropdown />
        </View>
        <Counter />
      </View>
    </CustomBottomSheet>
  );
};

export default AddNewItemModal;

const styles = StyleSheet.create({
  headerIconAndTextContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  filterText: {
    fontSize: FONT_25,
    fontWeight: '600',
    fontStyle: 'normal',
    color: GREEN100,
    marginStart: 8,
  },
  buttonContainer: {marginBottom: 10, width: '95%'},
  dropdownContainer: {
    marginBottom: 10,
  },
});
