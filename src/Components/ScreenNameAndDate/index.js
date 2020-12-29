import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  FONT_18,
  FONT_25,
  SCREEN_HEIGHT,
} from '../../constants/design/colorsAndSizes';
import {CustomText} from '../customText';

const ScreenNameAndDate = ({
  containerStyle,
  screenName,
  date,
  nameStyle,
  dateStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <CustomText
        text={screenName || 'screen name'}
        textStyle={[styles.name, nameStyle]}
      />
      {date && (
        <CustomText
          text={date || 'screen date'}
          textStyle={[styles.date, dateStyle]}
        />
      )}
    </View>
  );
};

export default ScreenNameAndDate;

const styles = StyleSheet.create({
  container: {
    width: '95%',
    height: SCREEN_HEIGHT / 10,
    backgroundColor: 'transparent',
    alignSelf: 'center',
    alignItems: 'flex-start',
  },
  name: {
    fontSize: FONT_25,
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: '#263231',
  },
  date: {
    fontSize: FONT_18,
    fontWeight: '600',
    fontStyle: 'normal',
    color: '#777777',
  },
});
