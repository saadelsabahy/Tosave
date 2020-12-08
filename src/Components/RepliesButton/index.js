import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Badge} from 'react-native-paper';
import {BADGE_COLOR, WHITE_COLOR} from '../../constants/design/colorsAndSizes';
import {RepliesIcon} from '../../Svgs';

const RepliesButton = ({badgeStyle, onPress, repliesNumber}) => {
  return (
    <Pressable style={[styles.container]} onPress={onPress}>
      <RepliesIcon fill={WHITE_COLOR} />
      {repliesNumber && (
        <View style={{position: 'absolute', top: -5, start: -5}}>
          <Badge style={[styles.badge, badgeStyle]}>{repliesNumber}</Badge>
        </View>
      )}
    </Pressable>
  );
};

export {RepliesButton};

const styles = StyleSheet.create({
  container: {
    width: 44,
    height: 44,
    borderRadius: 13,
    backgroundColor: '#263231',
    justifyContent: 'center',
    alignItems: 'center',
  },
  badge: {
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
    width: 25,
    height: 20,
    borderRadius: 6,
  },
});
