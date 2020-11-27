import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';
import {
  FONT_13,
  FONT_25,
  GREEN100,
  WELCOME_ITEM_HEIGHT,
  WHITE_COLOR,
} from '../../constants/design/colorsAndSizes';
import {HsaDashboardIcon, MaintenanceIcon} from '../../Svgs';
import {CustomText} from '../customText';
const WelcomeScreenItem = ({
  onItemPressed,
  cardTitleStyle,
  cardParagraphStyle,
  SvgIcon,
  title,
  description,
}) => {
  return (
    <Pressable style={styles.container} onPress={onItemPressed}>
      <Card.Content style={styles.innerContent}>
        <CustomText
          text={title}
          textStyle={[styles.cardTitle, cardTitleStyle]}
        />
        <CustomText
          text={description}
          textStyle={[styles.cardParagraph, cardParagraphStyle]}
        />
      </Card.Content>
      {SvgIcon && <View style={styles.innerContent}>{SvgIcon}</View>}
    </Pressable>
  );
};

export default WelcomeScreenItem;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: WELCOME_ITEM_HEIGHT,
    backgroundColor: GREEN100,
    borderRadius: 18,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignSelf: 'center',
  },
  innerContent: {
    // width: '50%',
    height: '70%',
    justifyContent: 'flex-end',
    paddingHorizontal: 0,
    paddingVertical: 0,
    marginHorizontal: 0,
    marginVertical: 0,
  },
  cardTitle: {
    fontSize: FONT_25,
    fontWeight: 'bold',
    fontStyle: 'normal',
    lineHeight: 30,
    letterSpacing: 0,
    color: WHITE_COLOR,
    marginBottom: 5,
  },
  cardParagraph: {
    width: 130,
    height: 32,
    fontSize: FONT_13,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 16,
    letterSpacing: 0,
    color: WHITE_COLOR,
  },
});
