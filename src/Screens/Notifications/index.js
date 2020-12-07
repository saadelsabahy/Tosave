import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Block, CustomText, Header, NotificationCard} from '../../Components';
import {
  calcHeight,
  FONT_25,
  GREEN100,
  SCREEN_HEIGHT,
  WHITE_COLOR,
} from '../../constants/design/colorsAndSizes';
import {NotificationIcon} from '../../Svgs';

const Notifications = () => {
  return (
    <View style={[styles.container]}>
      <Block>
        <Header back backOnly />

        <View style={[styles.headerTextContainer]}>
          <NotificationIcon fill={GREEN100} />
          <CustomText text={'notifications'} textStyle={styles.headerText} />
        </View>

        <View style={[styles.notificationListContainer]}>
          <FlatList
            contentContainerStyle={{paddingBottom: calcHeight(150)}}
            contentInsetAdjustmentBehavior="automatic"
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]}
            keyExtractor={(item, index) => `${index}`}
            renderItem={({item, index}) => {
              return <NotificationCard />;
            }}
          />
        </View>
      </Block>
    </View>
  );
};

export {Notifications};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: WHITE_COLOR,
  },
  headerTextContainer: {
    flexDirection: 'row',
    width: '92%',
    height: SCREEN_HEIGHT / 20,
    alignSelf: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: FONT_25,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#263231',
    marginStart: 10,
  },
  notificationListContainer: {
    marginTop: 10,
  },
});
