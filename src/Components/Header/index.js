import * as React from 'react';
import {View, StyleSheet, Pressable, I18nManager} from 'react-native';
import {Appbar, Badge, Button} from 'react-native-paper';
import {
  WHITE_COLOR,
  BADGE_COLOR,
  FONT_13,
  GREEN100,
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  calcFont,
} from '../../constants/design/colorsAndSizes';
import {NotificationIcon, Logo} from '../../Svgs';
import PhotoRecangle from '../PhotoRecangle';

const Header = ({
  headerStyle,
  onMenuPressed,
  onNotificationsPressed,
  badgeStyle,
  notificationsNumber,
  notificationIconContainerStyle,
  goBack,
  back,
  headerTitleStyle,
  title,
  backOnly,
  noPhoto,
}) => {
  // const notificationsNumber = 10;

  return (
    <Appbar.Header style={[styles.header, headerStyle]}>
      {back ? (
        <Appbar.BackAction
          onPress={goBack}
          color={GREEN100}
          size={calcFont(25)}
          style={{marginStart: 0, paddingHorizontal: 0}}
        />
      ) : (
        <Logo />
      )}
      <Appbar.Content
        title={title}
        titleStyle={[styles.title, headerTitleStyle]}
      />
      {!backOnly && (
        <View style={styles.rowContainer}>
          <Pressable onPress={onNotificationsPressed} style={{flex: 1}}>
            <View
              style={[
                styles.notificationIconContair,
                {
                  justifyContent: notificationsNumber ? 'flex-end' : 'center',
                  transform: [{rotate: notificationsNumber ? '30deg' : '0deg'}],
                  borderRadius: Math.round(
                    SCREEN_WIDTH / 2 + SCREEN_HEIGHT / 2,
                  ),
                },
                notificationIconContainerStyle,
              ]}>
              {notificationsNumber && (
                <Badge style={[styles.badge, badgeStyle]}>
                  {notificationsNumber}
                </Badge>
              )}
              <NotificationIcon
                style={{
                  top: notificationsNumber ? -15 : 0,
                  //start: notificationsNumber ? 15 : 0,
                }}
              />
            </View>
          </Pressable>
          {!noPhoto && <PhotoRecangle onAvatarPressed={onMenuPressed} />}
        </View>
      )}
    </Appbar.Header>
  );
};
const styles = StyleSheet.create({
  header: {
    backgroundColor: WHITE_COLOR,
    elevation: 0,
    alignSelf: 'center',
    width: '100%',
    marginHorizontal: 0,
    marginStart: 0,
    //backgroundColor: 'red',
    paddingStart: 0,
    paddingHorizontal: 0,
    //height: SCREEN_HEIGHT / 11,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Montserrat',
    fontSize: FONT_13,
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 18,
    letterSpacing: 0,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
    color: GREEN100,
    textTransform: 'capitalize',
  },
  rowContainer: {
    // width: 105,
    flex: 0.6,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    // backgroundColor: '#ddd',
  },
  badge: {
    // position: 'absolute',
    zIndex: 10,
    /*
    top: 17, */ start: -20,
    backgroundColor: BADGE_COLOR,
    borderColor: WHITE_COLOR,
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 6,
    shadowOpacity: 1,
    borderStyle: 'solid',
    borderWidth: 1,
    color: WHITE_COLOR,
    fontFamily: 'Montserrat',
    textTransform: 'capitalize',
    padding: 0,
    margin: 0,
    fontWeight: 'bold',
    transform: [{rotate: '-30deg'}],
  },
  notificationIconContair: {
    flex: 1,
    alignItems: 'center',
    width: SCREEN_WIDTH / 10,
    // backgroundColor: 'red',
  },
});

export {Header};
