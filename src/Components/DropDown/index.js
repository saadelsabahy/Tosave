import React, {useRef} from 'react';
import {View, Text, StyleSheet, I18nManager, Image} from 'react-native';
import {Dropdown} from 'react-native-material-dropdown';
import {
  MAIN_COLOR,
  WHITE_COLOR,
  INPUT_BACKGROUND,
  SECOND_ICON_BACKGROUND,
  SURFACE_COLOR,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  TEXT_COLOR,
  MAIN_RED_COLOR,
  PLACEHOLDER_COLOR,
  ERROR_RED_COLOR,
  calcFont,
  TEXT_BLACK,
  FONT_16,
} from '../../constants/design/colorsAndSizes';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {CustomText} from '../customText';
import {DropdownArrow} from '../../Svgs';
const CustomDropdown = ({
  containerStyle,
  data = [
    {
      value: 'Banana',
    },
    {
      value: 'Mango',
    },
    {
      value: 'Pear',
    },
  ],
  label = 'dropdown label',
  errorTextStyle,
  error,
  name,
  value,
  referance,
  dropDownTitle = 'title',
  ...res
}) => {
  return (
    <>
      <View style={[styles.container, containerStyle]}>
        <CustomText text={dropDownTitle} textStyle={[styles.dropDownTitle]} />
        <Dropdown
          name={name}
          ref={referance}
          data={data}
          label={label}
          value={value}
          baseColor={!value ? PLACEHOLDER_COLOR : SURFACE_COLOR}
          itemColor={TEXT_BLACK}
          textColor={TEXT_BLACK} //For Labels in DropDown
          labelFontSize={0} //Size For Animation Label
          containerStyle={styles.inContainer}
          inputContainerStyle={{
            borderBottomWidth: 0,
            borderBottomColor: 'transparent',
          }} //Make UnderLine Transparent
          fontSize={calcFont(18)}
          titleTextStyle={{color: TEXT_BLACK}} //Color For Fixed Label Title
          itemTextStyle={styles.fontFamily}
          style={styles.inputStyle}
          dropdownOffset={{top: 12, left: 0}}
          rippleInsets={{top: 0}}
          labelTextStyle={styles.innerLabel}
          inputContainerStyle={{
            borderBottomWidth: 0,
            borderBottomColor: 'transparent',
          }}
          pickerStyle={{backgroundColor: WHITE_COLOR, marginStart: 5}}
          rippleOpacity={0} //Hide The Effect Of Opacity
          renderAccessory={() => <DropdownArrow />}
          selectedItemColor={MAIN_RED_COLOR}
          placeholderTextColor={WHITE_COLOR}
          {...res}
        />
      </View>
      {error && error.message && (
        <CustomText
          text={error.message}
          textStyle={[styles.errorText, errorTextStyle]}
        />
      )}
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH * 0.95,
    marginTop: 0,
    paddingVertical: 0,
    borderRadius: 10,
    borderWidth: 0.7,
    borderColor: WHITE_COLOR,
    height: 55,
    borderRadius: 20,
    backgroundColor: '#f3f3f3',
    paddingHorizontal: 12,
  },
  dropDownTitle: {
    fontFamily: 'Montserrat',
    fontSize: FONT_16 - 2,
    fontWeight: 'bold',
    fontStyle: 'normal',

    color: '#a0a0a0',
  },
  inContainer: {
    flex: 1,
    overflow: 'hidden',
    // backgroundColor: '#589',
    justifyContent: 'center',
  },
  fontFamily: {
    fontFamily: 'Montserrat',
  },
  inputStyle: {
    fontSize: calcFont(25),
    fontFamily: 'Montserrat',
    textAlign: I18nManager.isRTL ? 'right' : 'left',
    height: '100%',
    top: -5,
    marginHorizontal: 5,
  },
  innerLabel: {
    fontFamily: 'Montserrat',
    marginTop: -7,
    marginStart: 5,
    color: PLACEHOLDER_COLOR,
  },
  errorText: {
    color: ERROR_RED_COLOR,
  },
});

export {CustomDropdown};

/* import React from 'react';
import {StyleSheet, Text, View, Pressable, FlatList} from 'react-native';
import {Button, Menu, Divider, Provider, IconButton} from 'react-native-paper';
import {
  FONT_13,
  FONT_18,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from '../../constants/design/colorsAndSizes';
import {DropdownArrow} from '../../Svgs';
import {CustomText} from '../customText';
const CustomDropdown = ({
  visible,
  openMenu,
  closeMenu,
  data,
  selectedText,
  title,
  onSelectItem,
}) => {
  return (
    <Menu
      visible={true}
      onDismiss={closeMenu}
      style={{width: '95%', alignSelf: 'center', paddingHorizontal: 0}}
      anchor={
        <Pressable style={[styles.container]} onPress={openMenu}>
          <View style={{width: '90%', justifyContent: 'center'}}>
            <CustomText text={title} textStyle={[styles.title]} />
            <View style={[styles.selectedItemAndArrowRow]}>
              <CustomText
                text={selectedText}
                textStyle={[styles.selectedItemText]}
              />
              <DropdownArrow />
            </View>
          </View>
        </Pressable>
      }>
      <FlatList
        style={{maxHeight: 150}}
        persistentScrollbar
        //  ItemSeparatorComponent={() => <Divider style={{ marginLeft: 16 }} />}
        data={data}
        renderItem={({item, index}) => {
          return (
            <Pressable
              onPress={() => {
                onSelectItem(item);
              }}
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? '#ddd' : 'transparent',
                  height: SCREEN_HEIGHT / 19,
                  width: '100%',
                  paddingHorizontal: 10,
                  justifyContent: 'center',
                },
              ]}>
              <CustomText text={item} />
            </Pressable>
          );
        }}
        keyExtractor={(item, index) => `${index}`}
      />
    </Menu>
  );
};

export {CustomDropdown};

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    height: 65,
    borderRadius: 20,
    backgroundColor: '#f3f3f3',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  selectedItemAndArrowRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: FONT_13 + 1,
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 18,
    letterSpacing: 0,
    color: '#a0a0a0',
  },
  selectedItemText: {
    fontFamily: 'Montserrat',
    fontSize: FONT_18,
    fontWeight: 'bold',
    fontStyle: 'normal',
    lineHeight: 22,
    letterSpacing: 0,
    color: '#263231',
  },
});
 */
