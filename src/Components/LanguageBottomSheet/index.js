import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {
  calcFont,
  calcHeight,
  FONT_18,
  FONT_25,
  GREEN100,
  SCREEN_HEIGHT,
} from '../../constants/design/colorsAndSizes';
import {England, SaudiArabia} from '../../Svgs';
import {BottomSheetContainer} from '../BottomSheetBlock';
import {CustomCheckBox} from '../CheckBox';
import {CustomButton} from '../CustomButton';
import {CustomText} from '../customText';

const LanguageSheet = ({
  buttonText,
  title,
  arabic,
  english,
  onChangeLanguageComplete,
  description,
  selectedLanguage,
  changeLanguage,
}) => {
  return (
    <BottomSheetContainer contentContainerStyle={[styles.content]}>
      <CustomText text={title} textStyle={[styles.headerText]} />
      <CustomText text={description} textStyle={[styles.description]} />

      <Pressable
        onPress={() => {
          changeLanguage && changeLanguage('en');
        }}
        style={[styles.rowContainer]}>
        <CustomCheckBox checked={selectedLanguage == 'en'} />
        <England />
        <CustomText text={english} textStyle={[styles.languge]} />
      </Pressable>

      <Pressable
        onPress={() => {
          changeLanguage && changeLanguage('ar');
        }}
        style={[styles.rowContainer]}>
        <CustomCheckBox checked={selectedLanguage == 'ar'} />
        <SaudiArabia />
        <CustomText text={arabic} textStyle={[styles.languge]} />
      </Pressable>

      <CustomButton
        buttonText={buttonText}
        onPress={onChangeLanguageComplete}
      />
    </BottomSheetContainer>
  );
};

export {LanguageSheet};

const styles = StyleSheet.create({
  content: {
    justifyContent: 'space-evenly',
    width: '90%',
    height: SCREEN_HEIGHT / 2,
  },
  headerText: {
    fontSize: FONT_25,
    fontWeight: '600',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: GREEN100,
  },
  description: {
    fontSize: FONT_18,
    fontWeight: '600',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#a0a0a0',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  languge: {
    fontSize: FONT_18,
    fontWeight: '600',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#263231',
    marginStart: calcFont(10),
  },
});
