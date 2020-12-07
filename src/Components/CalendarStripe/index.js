import React from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import {CustomText} from '../customText';
import {
  BADGE_COLOR,
  MONTHLY_CALENDAR_CONTAINER,
} from '../../constants/design/colorsAndSizes';
import HsaCard from '../ListItem';
import {MonthlyCalendar} from '../../Svgs';
// import {FlatList} from 'react-native-gesture-handler';
dayjs.extend(localeData);
const CustomCalendarStripe = ({calenderMonthStyle}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={dayjs.monthsShort()}
        contentContainerStyle={{justifyContent: 'space-between'}}
        keyExtractor={(item, index) => `${index}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <View
              style={[
                styles.monthContainer,
                {borderBottomWidth: index == 0 ? 3 : 0},
              ]}>
              <CustomText
                text={` ${item.toString().toUpperCase()} ${dayjs().year()}`}
                textStyle={[styles.calenderMonth, calenderMonthStyle]}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

export {CustomCalendarStripe};

const styles = StyleSheet.create({
  container: {
    height: MONTHLY_CALENDAR_CONTAINER,
    backgroundColor: '#F3F3F3',
    width: '100%',
  },
  monthContainer: {
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: BADGE_COLOR,
  },
  calenderMonth: {
    textTransform: 'uppercase',
  },
});
