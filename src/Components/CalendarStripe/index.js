import React from 'react';
import {
  I18nManager,
  Platform,
  FlatList,
  StyleSheet,
  View,
  Pressable,
} from 'react-native';
import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import {CustomText} from '../customText';
import {
  BADGE_COLOR,
  INPUTS_AND_BUTTONS_HEIGHT,
  MONTHLY_CALENDAR_CONTAINER,
  SCREEN_WIDTH,
} from '../../constants/design/colorsAndSizes';
import HsaCard from '../WelcomeDashboardListItem';
import {MonthlyCalendar} from '../../Svgs';
// import {FlatList} from 'react-native-gesture-handler';
dayjs.extend(localeData);

const CustomCalendarStripe = ({
  calenderMonthStyle,
  onCalenderStripeItemPressed,
  selectedMonth,
}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={dayjs.monthsShort()}
        contentContainerStyle={{justifyContent: 'space-between'}}
        keyExtractor={(item, index) => `${index}`}
        horizontal
        legacyImplementation={false}
        removeClippedSubviews={Platform.OS === 'android'}
        style={{
          flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        }}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <Pressable
              style={[
                styles.monthContainer,
                {borderBottomWidth: index == selectedMonth - 1 ? 3 : 0},
              ]}
              onPress={() => onCalenderStripeItemPressed(index + 1)}>
              <CustomText
                text={` ${item.toString().toUpperCase()} ${dayjs().year()}`}
                textStyle={[styles.calenderMonth, calenderMonthStyle]}
              />
            </Pressable>
          );
        }}
        initialNumToRender={5}
        maxToRenderPerBatch={5}
        removeClippedSubviews={Platform.OS === 'android'}
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
