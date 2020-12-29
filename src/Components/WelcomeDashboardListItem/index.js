import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Pressable,
  View,
  I18nManager,
} from 'react-native';
import {IconButton} from 'react-native-paper';
import {
  AnimatablePressable,
  calcFont,
  calcHeight,
  calcWidth,
  FONT_16,
  FONT_22,
  GREEN100,
  PLACEHOLDER,
  SCREEN_WIDTH,
  WHITE_COLOR,
} from '../../constants/design/colorsAndSizes';
import {CustomText} from '../customText';

const WelcomeDashboardListItem = ({
  onItemPressed,
  ItemIcon,
  itemName,
  delay,
}) => {
  return (
    <AnimatablePressable
      animation="zoomIn"
      delay={delay}
      style={[styles.card]}
      onPress={onItemPressed}>
      {ItemIcon && (
        <View style={styles.imageBackground}>
          {React.cloneElement(ItemIcon, {width: '100%', height: '100%'})}
        </View>
      )}
      <View style={styles.cardDetailesContainer}>
        {ItemIcon}
        <CustomText textStyle={[styles.title]} text={itemName} />
        <IconButton
          icon={I18nManager.isRTL ? 'arrow-left' : 'arrow-right'}
          color={GREEN100}
          size={FONT_22}
          style={styles.goIconContainer}
          onPress={onItemPressed}
        />
      </View>
    </AnimatablePressable>
  );
};

export {WelcomeDashboardListItem};

const styles = StyleSheet.create({
  card: {
    width: SCREEN_WIDTH / 2 - 20,
    margin: 5,
    height: calcHeight(200),
    borderRadius: calcFont(18),
    backgroundColor: WHITE_COLOR,
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 11,
    shadowOpacity: 1,
    elevation: 2,
    borderWidth: 0.2,
    borderColor: PLACEHOLDER,
    overflow: 'hidden',
  },
  imageBackground: {
    width: '50%',
    height: '50%',
    position: 'absolute',
    top: 10,
    end: -10,
    opacity: 0.08,
    alignItems: 'flex-end',
  },
  backSvg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  cardDetailesContainer: {
    flex: 1,
    height: '90%',
    width: '90%',
    justifyContent: 'flex-end',
    alignSelf: 'center',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: FONT_16,
    fontWeight: '600',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#263231',
    marginVertical: 5,
  },
  goIconContainer: {
    backgroundColor: '#E2F5F3',
    width: 37,
    height: 23,

    borderRadius: 9,
    marginStart: 0,
  },
});
