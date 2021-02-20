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
  Loader,
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
import {CATEGORY_INCLUDES_CALENDER} from '../../constants/ConstantsVariables';
import {DurationIcon, FilterIcon} from '../../Svgs';
import {useTranslation} from 'react-i18next';
import {useQuery, useSubscription} from '@apollo/client';
import {
  GET_MONTHLY,
  GET_RISK,
  GET_EMERGENCY,
  GET_INCIDENTS,
  GET_MAINTENNCE,
  GET_TRAINING,
} from '../../constants/api/Graphql/Queries';
import reactotron from 'reactotron-react-native';
import dayjs from 'dayjs';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import {EmptyList} from '../../Components/ListEmptyComponent';
dayjs.extend(LocalizedFormat);
const segmentValuesEnglish = ['new', 'underReview', 'done'];
const DashboardCategoryDetails = ({navigation, route}) => {
  const {t} = useTranslation();
  const segmentValues = [
    t('segment:new'),
    t('segment:underReview'),
    t('segment:done'),
  ];

  const {category, category_ar, icon, id} = route?.params;
  const CATEGORY = I18nManager.isRTL ? category_ar : category;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedMonth, setSelectedMonth] = useState(1);
  const filterRef = useRef();
  const onNotificationsPressed = () => {
    navigation.navigate('Notifications');
  };
  const onPhotoPressed = () => {
    navigation.openDrawer();
  };
  const SUBSCRIPTION =
    id == 1
      ? GET_MONTHLY
      : id == 2
      ? GET_RISK
      : id == 3
      ? GET_TRAINING
      : id == 4
      ? GET_INCIDENTS
      : GET_MAINTENNCE;
  reactotron.log({SUBSCRIPTION, id});
  const statusVariableKey = id == 2 ? 'state' : 'status';
  const variables =
    id == 1
      ? {
          filter: {
            month: {_eq: selectedMonth},
            status: {_eq: selectedIndex},
          },
        }
      : {
          filter: {
            [statusVariableKey]: {
              _eq:
                id == 2 ? segmentValuesEnglish[selectedIndex] : selectedIndex,
            },
          },
        };
  const {data, loading, error} = useSubscription(SUBSCRIPTION, {
    variables,
  });

  reactotron.log({data});
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
  const onCalenderStripeItemPressed = (month) => {
    setSelectedMonth(month);
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
          values={segmentValues}
          selectedIndex={selectedIndex}
          onChange={onSegmentChange}
        />

        <View style={[styles.calendarStripeContainer]}>
          {CATEGORY_INCLUDES_CALENDER.includes(id) ? (
            <CustomCalendarStripe
              onCalenderStripeItemPressed={onCalenderStripeItemPressed}
              selectedMonth={selectedMonth}
            />
          ) : (
            <CustomDropdown />
          )}
        </View>

        <View style={styles.listContainer}>
          {loading && <Loader />}
          {data && (
            <FlatList
              contentContainerStyle={{flexGrow: 1}}
              // extraData={selectedIndex}
              data={data?.reports}
              keyExtractor={(item, index) => `${item.id}`}
              renderItem={({
                item: {
                  id,
                  branch_id,
                  created_at,
                  updated_at,
                  branch: {name, name_en},
                  badgeNumber,
                },
                index,
              }) => {
                const date = dayjs(created_at).format('LL').toString();
                return (
                  <MonthlyReportCard
                    description={I18nManager.isRTL ? name : name_en}
                    title={`${t('general:report')} ${date}`}
                    date={date}
                    done={selectedIndex == 2}
                    badgeNumber={selectedIndex == 1 && badgeNumber}
                    onPress={() => onItemPressed({date})}
                    delay={index * 500}
                  />
                );
              }}
              ListEmptyComponent={<EmptyList />}
            />
          )}
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
