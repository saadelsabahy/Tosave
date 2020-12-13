import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  Block,
  CreateMonthlyReportIcon,
  CustomButton,
  CustomDropdown,
  CustomText,
  DamageType,
  Header,
  ReportHeader,
  WheelDatePicker,
} from '../../Components';
import ScreenNameAndDate from '../../Components/ScreenNameAndDate';
import {
  FONT_16,
  GREEN100,
  WHITE_COLOR,
} from '../../constants/design/colorsAndSizes';
import {
  AddIcon,
  AddNewItemIcon,
  ClockIcon,
  DeleteIcon,
  DeleteIconWithBg,
  DurationIcon,
} from '../../Svgs';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import CommentInput from '../../Components/CommentInput';
import AddNewItemModal from '../../Components/AddNewItemModal';
import {FlatList} from 'react-native-gesture-handler';
import {Counter} from '../../Components/Counter';
dayjs.extend(localizedFormat);

const CreateMaintenenceReport = ({screenName, reportDate}) => {
  const [dateTime, setdateTime] = React.useState(new Date());
  const AddnewItemModalRef = React.useRef();

  const onDateTimeChange = (dateTime) => {
    setdateTime(dateTime);
  };
  const onAddNewItemPressed = () => {
    AddnewItemModalRef.current.open();
  };
  return (
    <>
      <AddNewItemModal reference={AddnewItemModalRef} />
      <KeyboardAwareScrollView
        style={[styles.container]}
        stickyHeaderIndices={[0]}
        enableOnAndroid>
        <Header back notificationsNumber={1000} />
        <ScreenNameAndDate screenName={screenName} date={reportDate} />

        <Block containerStyle={styles.block}>
          <ReportHeader
            headerName={'Select the branch'}
            containerStyle={styles.reportHeaderStyle}
          />
          <CustomDropdown />

          <ReportHeader
            headerName={'Select the branch'}
            containerStyle={styles.reportHeaderStyle}
          />
          <CustomDropdown />
          <ReportHeader
            headerName={'Select time and date'}
            containerStyle={styles.reportHeaderStyle}
          />
          <WheelDatePicker date={dateTime} onDateChange={onDateTimeChange} />
          <View style={styles.dateTimeInfoContainer}>
            <View style={styles.dateTimeItemContainer}>
              <ClockIcon />
              <CustomText
                text={dayjs(dateTime).format('LT').toString()}
                textStyle={styles.dateTimeText}
              />
            </View>

            <View style={styles.dateTimeItemContainer}>
              <DurationIcon />
              <CustomText
                text={dayjs(dateTime).format('D-M-YYYY').toString()}
                textStyle={styles.dateTimeText}
              />
            </View>
          </View>

          <ReportHeader
            headerName={'Type of system'}
            containerStyle={styles.reportHeaderStyle}
          />
          <CommentInput />

          <ReportHeader
            headerName={'Problem description'}
            containerStyle={styles.reportHeaderStyle}
          />
          <CommentInput />

          <ReportHeader
            headerName={'Problem solution'}
            containerStyle={styles.reportHeaderStyle}
          />
          <CommentInput />

          <ReportHeader
            headerName={'Spare parts used'}
            containerStyle={styles.reportHeaderStyle}
          />
          <View style={styles.AddNewItemContainer}>
            <AddIcon fill={GREEN100} onPress={onAddNewItemPressed} />
            <CustomText text={'add new item'} />
          </View>
          {/* fire alarm */}
          <View style={styles.itemContainer}>
            <DamageType
              type={'Fire alarm'}
              containerStyle={{width: 'auto', height: 'auto', padding: 10}}
            />
            <View style={styles.subItemContainer}>
              <View style={styles.bult} />
              <CustomText text="item name" />
              <Counter containerStyle={{flex: 1, width: 'auto'}} />
              <DeleteIconWithBg />
            </View>
          </View>
          <View style={styles.itemContainer}>
            <DamageType
              type={'Fire alarm'}
              containerStyle={{width: 'auto', height: 'auto', padding: 10}}
            />
            <View style={styles.subItemContainer}>
              <View style={styles.bult} />
              <CustomText text="item name" />
              <Counter containerStyle={{flex: 1, width: 'auto'}} />
              <DeleteIconWithBg />
            </View>
          </View>
          <CustomButton />
        </Block>
      </KeyboardAwareScrollView>
    </>
  );
};

export default CreateMaintenenceReport;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    /*     width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT, */
    backgroundColor: WHITE_COLOR,
    // alignItems: 'center',
    /* paddingBottom: 40, */
  },
  block: {
    height: 'auto',
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    paddingBottom: 10,
  },
  reportHeaderStyle: {
    padding: 8,
    marginVertical: 8,
  },
  dateTimeInfoContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateTimeItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateTimeText: {
    fontSize: FONT_16 - 1,
    fontWeight: '700',
    fontStyle: 'normal',
    color: '#263231',
    marginStart: 5,
  },
  AddNewItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemContainer: {
    flex: 1,
    //backgroundColor: '#ddd',
  },
  bult: {
    width: 8,
    height: 8,
    backgroundColor: '#11a99d',
    marginEnd: 5,
  },
  subItemContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
