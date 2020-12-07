import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {
  calcFont,
  calcHeight,
  calcWidth,
  FONT_13,
  FONT_16,
  GREEN100,
  GREEN50,
  TEXT_BLACK,
} from '../../constants/design/colorsAndSizes';
import {MonthlyCalendarIcon} from '../../Svgs';
import {Block} from '../Block';
import {CustomText} from '../customText';
import dayjs from 'dayjs';

import LocalizedFormat from 'dayjs/plugin/localizedFormat';
const NotificationCard = ({unReaded, icon, type, text, date}) => {
  // const unReaded = true;
  dayjs.extend(LocalizedFormat);
  return (
    <Pressable
      style={[
        styles.container,
        {backgroundColor: unReaded ? GREEN50 : '#F3F3F3'},
      ]}>
      <View style={[styles.contentContainer]}>
        <View style={[styles.cardHeader]}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {icon &&
              React.cloneElement(icon, {
                width: calcWidth(19),
                height: calcHeight(19),
              })}

            <CustomText
              text={type}
              textStyle={[
                styles.typeText,
                {color: unReaded ? GREEN100 : TEXT_BLACK},
              ]}
            />
          </View>
          {unReaded && <View style={[styles.unReadedCircle]} />}
        </View>

        <View style={[styles.notificationBody]}>
          <CustomText
            numberOfLines={3}
            ellipsizeMode={'tail'}
            textStyle={[
              styles.notificationText,
              {color: unReaded ? GREEN100 : TEXT_BLACK},
            ]}
            text={text}
          />
        </View>
        <View style={[styles.timeContainer]}>
          <CustomText
            text={
              date /* `${dayjs().format('DD-MM-YYYY')}   ${dayjs().format('LT')}` */
            }
            textStyle={[
              styles.timeText,
              {color: unReaded ? TEXT_BLACK : '#7b7b7b'},
            ]}
          />
        </View>
      </View>
    </Pressable>
  );
};

export {NotificationCard};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: calcHeight(144),
    borderRadius: calcFont(20),
    backgroundColor: '#F3F3F3',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  contentContainer: {
    width: '90%',
    height: '90%',
    justifyContent: 'space-evenly',
  },
  cardHeader: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  typeText: {
    fontSize: FONT_16 - 1,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#263231',
    marginStart: 10,
  },
  notificationBody: {
    width: '100%',
    height: calcHeight(58),
  },
  notificationText: {
    fontSize: FONT_13,
    fontWeight: '600',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#263231',
  },
  timeContainer: {width: '100%'},
  timeText: {
    fontSize: FONT_13,
    fontWeight: '600',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#7b7b7b',
  },
  unReadedCircle: {
    width: 10,
    height: 10,
    borderRadius: 10 / 2,
    backgroundColor: GREEN100,
    shadowColor: GREEN100,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 11,
    shadowOpacity: 1,
    /* position: 'absolute',
    top: 10,
    end: 10, */
  },
});
