import React, {useState, useRef} from 'react';
import {FlatList, I18nManager, StyleSheet, Text, View} from 'react-native';
import {
  Block,
  CreateMonthlyReportIcon,
  CustomCalendarStripe,
  CustomDropdown,
  CustomText,
  DialogueModal,
  FilterModal,
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
import {CATEGORY_INCLUDES_PRANCHES} from '../../constants/ConstantsVariables';
import {DurationIcon, FilterIcon} from '../../Svgs';
import {useTranslation} from 'react-i18next';
import {useQuery, useSubscription} from '@apollo/client';
import {GET_MONTHLY} from '../../constants/api/Graphql/Queries';
const DashboardCategoryDetails = ({navigation, route}) => {
  const {t} = useTranslation();
  const {category, category_ar, icon} = route.params;
  const CATEGORY = I18nManager.isRTL ? category_ar : category;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const filterRef = useRef();
  const onNotificationsPressed = () => {
    navigation.navigate('Notifications');
  };
  const onPhotoPressed = () => {
    navigation.openDrawer();
  };
  const {data} = useSubscription(GET_MONTHLY, {
    variables: {filter: {}},
  });

  console.log({data});
  const onSegmentChange = (event) => {
    setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
  };

  const onCreatePressed = () => {
    navigation.navigate('CreateReport', {category, category_ar});
  };

  const goBack = () => {
    navigation.goBack();
  };
  const onItemPressed = ({date}) => {
    navigation.navigate('ReportDetails', {category, category_ar, date});
  };
  const onFilterIconPressed = () => {
    filterRef.current.open();
  };
  return (
    <View style={[styles.container]}>
      <Block>
        <Header
          back
          onMenuPressed={onPhotoPressed}
          onNotificationsPressed={onNotificationsPressed}
          goBack={goBack}
          notificationsNumber={100}
        />

        <View style={[styles.pageTitleContainer]}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {React.cloneElement(icon, {
              width: calcWidth(30),
              height: calcHeight(30),
              fill: GREEN100,
            })}
            <CustomText text={CATEGORY} textStyle={[styles.category]} />
          </View>

          {category.toLowerCase() == 'maintenance' ? (
            <FilterIcon onPress={onFilterIconPressed} />
          ) : (
            <DurationIcon />
          )}
        </View>

        <Segment
          values={[
            t('segment:new'),
            t('segment:underReview'),
            t('segment:done'),
          ]}
          selectedIndex={selectedIndex}
          onChange={onSegmentChange}
        />

        <View style={[styles.calendarStripeContainer]}>
          {CATEGORY_INCLUDES_PRANCHES.includes(category.toLowerCase()) ? (
            <CustomDropdown />
          ) : (
            <CustomCalendarStripe />
          )}
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
                  onPress={() => onItemPressed({date})}
                  delay={index * 500}
                />
              );
            }}
          />
        </View>
      </Block>
      <CreateMonthlyReportIcon onPress={onCreatePressed} />
      <FilterModal reference={filterRef} />
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
    justifyContent: 'space-between',
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
    width: '100%',
  },
  listContainer: {
    flex: 1,
  },
});
