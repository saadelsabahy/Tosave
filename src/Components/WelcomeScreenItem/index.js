import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';
import {
  FONT_13,
  FONT_25,
  GREEN100,
  WELCOME_ITEM_HEIGHT,
  WHITE_COLOR,
  AnimatablePressable,
  calcWidth,
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
  delay,
}) => {
  const backGroundLine = (height) => {
    return <View style={[styles.backGroundLine, {height}]} key={height} />;
  };
  return (
    <AnimatablePressable
      style={styles.container}
      onPress={onItemPressed}
      animation="fadeInUp"
      delay={delay}>
      <View style={[styles.backGroundLineContainer]}>
        <View style={{flexDirection: 'row'}}>
          {[50, 33, 40, 17].map((item, index) => backGroundLine(item))}
        </View>
        {React.cloneElement(SvgIcon, {
          width: 300,
          height: 120,
          style: {opacity: 0.8},
        })}
      </View>

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
    </AnimatablePressable>
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
    // marginVertical: 5,
  },
  backGroundLineContainer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    opacity: 0.1,
    alignSelf: 'center',
    top: 0,
  },
  backGroundLine: {
    width: 6,
    height: 50,
    backgroundColor: '#ffffff',
    marginEnd: 2,
    borderRadius: 5,
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
    color: WHITE_COLOR,
    textTransform: 'uppercase',
  },
  cardParagraph: {
    width: calcWidth(130),
    fontSize: FONT_13,
    fontWeight: '500',
    color: WHITE_COLOR,
  },
});
