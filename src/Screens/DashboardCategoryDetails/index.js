import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {
  Block,
  CreateMonthlyReportIcon,
  CustomCalendarStripe,
  CustomText,
  Header,
  MonthlyReportCard,
  Segment,
} from '../../Components';
import {
  calcHeight,
  calcWidth,
  FONT_25,
  GREEN100,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  WHITE_COLOR,
} from '../../constants/design/colorsAndSizes';
import {LIST_DATA} from '../../constants/design/MockData';

const DashboardCategoryDetails = ({navigation, route}) => {
  const {category, icon} = route.params;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const onNotificationsPressed = () => {
    navigation.navigate('Notifications');
  };
  const onPhotoPressed = () => {
    navigation.openDrawer();
  };

  const onSegmentChange = (event) => {
    setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
  };

  const onCreatePressed = () => {
    navigation.navigate('CreateReport');
  };

  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={[styles.container]}>
      <Block>
        <Header
          back
          onMenuPressed={onPhotoPressed}
          onNotificationsPressed={onNotificationsPressed}
          goBack={goBack}
        />

        <View style={[styles.pageTitleContainer]}>
          {React.cloneElement(icon, {
            width: calcWidth(30),
            height: calcHeight(30),
            fill: GREEN100,
          })}
          <CustomText text={category} textStyle={[styles.category]} />
        </View>

        <Segment
          values={['new', 'under review', 'done']}
          selectedIndex={selectedIndex}
          onChange={onSegmentChange}
        />

        <View style={[styles.calendarStripeContainer]}>
          <CustomCalendarStripe />
        </View>

        <View style={styles.listContainer}>
          <FlatList
            contentContainerStyle={{paddingBottom: calcHeight(100)}}
            // extraData={selectedIndex}
            data={LIST_DATA}
            keyExtractor={(item, index) => `${item.id}`}
            renderItem={({
              item: {category, type, id, date, badgeNumber},
              index,
            }) => {
              return (
                <MonthlyReportCard
                  description={type}
                  title={category}
                  date={date}
                  done={selectedIndex == 2}
                  badgeNumber={selectedIndex == 1 && badgeNumber}
                />
              );
            }}
          />
        </View>
      </Block>
      <CreateMonthlyReportIcon onPress={onCreatePressed} />
    </View>
  );
};

export {DashboardCategoryDetails};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: WHITE_COLOR,
  },
  pageTitleContainer: {
    width: '97%',
    alignSelf: 'center',
    height: SCREEN_HEIGHT / 13,
    flexDirection: 'row',
    alignItems: 'center',
  },
  category: {
    fontSize: FONT_25,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#263231',
    marginStart: 10,
  },
  calendarStripeContainer: {
    marginVertical: 10,
    width: SCREEN_WIDTH,
  },
  listContainer: {
    flex: 1,
  },
});
