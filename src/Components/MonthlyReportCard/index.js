import React from 'react';
import {Pressable, StyleSheet, Animated, View} from 'react-native';
import {Badge, Card} from 'react-native-paper';
import {
  GREEN50,
  SCREEN_WIDTH,
  WHITE_COLOR,
  GREEN100,
  FONT_16,
  BADGE_COLOR,
  calcHeight,
  AnimatablePressable,
} from '../../constants/design/colorsAndSizes';
import {
  CanceledIcon,
  CorrectIcon,
  DeleteIcon,
  DeleteIconWithBg,
  EditIcon,
} from '../../Svgs';
import {CustomText} from '../customText';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const MonthlyReportCard = ({
  badgeNumber,
  done,
  title,
  description,
  date,
  onPress,
  onEditPressed,
  onDeletePressed,
  cancelled,
  delay,
}) => {
  const renderEndAction = ({progress, dragx}) => {
    const opacity = dragx.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    });
    return (
      <Animated.View style={[styles.endActionContainer /* {opacity} */]}>
        <Pressable
          style={({pressed}) => [{opacity: pressed ? 0.7 : 1}]}
          onPress={onEditPressed}>
          <EditIcon />
        </Pressable>
        <Pressable
          style={({pressed}) => [{opacity: pressed ? 0.7 : 1}]}
          onPress={onDeletePressed}>
          <DeleteIconWithBg />
        </Pressable>
      </Animated.View>
    );
  };
  return (
    <Swipeable
      renderRightActions={(progress, dragx) =>
        renderEndAction({
          /* onEditPressed: () => alert('edit'),
          onDeletePressed: () => alert('delete'), */
          progress,
          dragx,
        })
      }>
      <AnimatablePressable
        animation="zoomInDown"
        delay={delay}
        style={styles.container}
        onPress={onPress}>
        <View style={styles.startContainer}>
          <CustomText text={title} textStyle={[styles.cardTitle]} />
          <CustomText text={description} textStyle={[styles.reportName]} />
          <CustomText text={date} textStyle={[styles.dateText]} />
        </View>

        <View style={styles.endContainer}>
          {badgeNumber && (
            <View style={styles.badgeContainer}>
              <Badge size={30} style={styles.badge}>
                {badgeNumber}
              </Badge>
            </View>
          )}
          {done && (
            <View style={styles.doneIconeContainer}>
              <CorrectIcon />
            </View>
          )}
          {cancelled && (
            <View style={styles.doneIconeContainer}>
              <CanceledIcon />
            </View>
          )}
        </View>
      </AnimatablePressable>
    </Swipeable>
  );
};

export {MonthlyReportCard};

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH - 20,
    height: calcHeight(105),
    borderRadius: 18,
    backgroundColor: '#ffffff',
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 11,
    shadowOpacity: 1,
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 5,
    overflow: 'hidden',
  },
  startContainer: {
    width: '80%',
    height: '80%',
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: 10,
  },
  endContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  badgeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badge: {
    width: 34,
    height: 34,
    borderRadius: 11,
    backgroundColor: '#F0F8E6',
    shadowColor: 'rgba(0, 0, 0, 0.17)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 11,
    shadowOpacity: 1,
    alignSelf: 'center',
    color: BADGE_COLOR,
  },
  doneIconeContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  cardTitle: {
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 11,
    shadowOpacity: 1,
  },
  reportName: {
    fontSize: FONT_16,
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 19,
    letterSpacing: 0,
    color: '#11a99d',
  },
  dateText: {
    fontSize: 13,
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 16,
    letterSpacing: 0,
    color: '#7c7c7c',
  },
  endActionContainer: {
    flex: 0.45,
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
