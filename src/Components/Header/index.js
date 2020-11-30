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
}) => {
  // const notificationsNumber = 10;

  return (
    <Appbar.Header style={[styles.header, headerStyle]}>
      {back ? (
        <Appbar.BackAction onPress={goBack} color={GREEN100} size={25} />
      ) : (
        <Logo />
      )}
      <Appbar.Content
        title={title}
        titleStyle={[styles.title, headerTitleStyle]}
      />
      <View style={styles.rowContainer}>
        <Pressable onPress={onNotificationsPressed} style={{flex: 1}}>
          <View
            style={StyleSheet.flatten(
              {
                flex: 1,
                alignItems: 'center',
                justifyContent: notificationsNumber ? 'flex-end' : 'center',
                transform: [{rotate: notificationsNumber ? '30deg' : '0deg'}],
                borderRadius: Math.round(SCREEN_WIDTH / 2 + SCREEN_HEIGHT / 2),
                // alignItems: 'center',
              },
              notificationIconContainerStyle,
            )}>
            {notificationsNumber && (
              <Badge style={[styles.badge, badgeStyle]}>
                {notificationsNumber}
              </Badge>
            )}
            <NotificationIcon
              style={{
                top: notificationsNumber ? -15 : 0,
              }}
            />
          </View>
        </Pressable>
        <PhotoRecangle />
      </View>
    </Appbar.Header>
  );
};
const styles = StyleSheet.create({
  header: {
    backgroundColor: 'transparent',
    elevation: 0,

    alignSelf: 'center',
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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  badge: {
    // position: 'absolute',
    zIndex: 10,
    /*
    top: 17, */ start: -25,
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
});

export {Header};