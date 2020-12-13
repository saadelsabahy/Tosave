import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  Block,
  CustomButton,
  CustomText,
  DamageType,
  Header,
  ReportHeader,
  ReportSubHeader,
} from '../../Components';
import RepliesModal from '../../Components/RepliesModal';
import {
  calcFont,
  calcHeight,
  calcWidth,
  FONT_16,
  FONT_18,
  GREEN50,
  RED_COLOR,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  WHITE_COLOR,
} from '../../constants/design/colorsAndSizes';
import {ClockIcon, DurationIcon, ReviewedIcon} from '../../Svgs';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import {FlatList} from 'react-native-gesture-handler';
dayjs.extend(localizedFormat);

const MaintenenceReport = ({category, date, dateTime = new Date()}) => {
  const repliesModalRef = React.useRef(null);
  return (
    <View style={{flex: 1}}>
      <KeyboardAwareScrollView
        style={[styles.container]}
        contentContainerStyle={{alignItems: 'center'}}
        stickyHeaderIndices={[0]}>
        <View style={{width: '97%'}}>
          <Header back />
        </View>
        <ReportSubHeader
          reportName={`${category} ${
            category.includes('report') ? '' : 'report'
          }`}
          reportDate={`${date}`}
          onRepliesButtonPressed={() => repliesModalRef.current.open()}
          repliesNumber={10}
        />

        <Block
          containerStyle={{
            height: 'auto',
            marginVertical: 10,
          }}>
          <ReportHeader
            containerStyle={styles.reportHeaderStyle}
            headerName="Details of report"
          />
          <CustomText text="branch name" />

          <ReportHeader
            containerStyle={styles.reportHeaderStyle}
            headerName="Details of report"
          />
          <CustomText text="branch name" />

          <ReportHeader
            containerStyle={styles.reportHeaderStyle}
            headerName="Details of report"
          />
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
            containerStyle={styles.reportHeaderStyle}
            headerName="Details of report"
          />
          <CustomText text="branch name" />

          <ReportHeader
            containerStyle={styles.reportHeaderStyle}
            headerName="Details of report"
          />
          <CustomText text="branch name" />

          <ReportHeader
            containerStyle={styles.reportHeaderStyle}
            headerName="Details of report"
          />
          <CustomText text="branch name" />

          <ReportHeader
            containerStyle={styles.reportHeaderStyle}
            headerName="Details of report"
          />

          <View
            style={{
              flex: 1,
              marginBottom: 20,
              borderBottomWidth: 0.7,
              paddingBottom: 5,
            }}>
            <DamageType type="Fire alarm" />
            <FlatList
              data={[1, 2, 3, 4, 5]}
              contentContainerStyle={{flexGrow: 1}}
              renderItem={(item, index) => {
                return (
                  <View style={styles.subItemContainer}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <View style={styles.bult} />
                      <CustomText
                        text="item name"
                        textStyle={styles.itemText}
                      />
                    </View>
                    <CustomText text={'5'} textStyle={styles.itemCount} />
                  </View>
                );
              }}
              keyExtractor={(item, index) => `${index}`}
            />
          </View>
          {/* damge.... */}

          <View style={{flex: 1, marginBottom: 20}}>
            <DamageType type="Fire alarm" />
            <FlatList
              data={[1, 2, 3, 4, 5]}
              contentContainerStyle={{flexGrow: 1}}
              ListFooterComponent={
                <View style={{marginVertical: 10}}>
                  <Pressable style={styles.endReportContainer}>
                    <CustomText
                      text="end of report"
                      textStyle={styles.endText}
                    />
                  </Pressable>
                  <Pressable style={[styles.reviewedContainer]}>
                    <ReviewedIcon />
                    <View>
                      <CustomText
                        text="Report Reviwed"
                        textStyle={styles.reportReviewedText}
                      />
                      <CustomText
                        text="26 - 5 - 2020"
                        textStyle={styles.reportRevieweddate}
                      />
                    </View>
                  </Pressable>
                </View>
              }
              renderItem={(item, index) => {
                return (
                  <View style={styles.subItemContainer}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <View style={styles.bult} />
                      <CustomText
                        text="item name"
                        textStyle={styles.itemText}
                      />
                    </View>
                    <CustomText text={'5'} textStyle={styles.itemCount} />
                  </View>
                );
              }}
              keyExtractor={(item, index) => `${index}`}
            />
          </View>
        </Block>
        <RepliesModal reference={repliesModalRef} />
      </KeyboardAwareScrollView>
    </View>
  );
};

export default MaintenenceReport;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: SCREEN_WIDTH,
    // height: SCREEN_HEIGHT,
    //  alignItems: 'center',
    backgroundColor: WHITE_COLOR,
  },
  reportHeaderStyle: {
    padding: 12,
    marginVertical: 8,
    alignItems: 'center',
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
  subItemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bult: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#11a99d',
    marginEnd: 5,
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#263231',
  },
  itemCount: {
    fontSize: 14,
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: '#11a99d',
  },
  endReportContainer: {
    width: calcWidth(174),
    height: calcHeight(65),
    backgroundColor: '#FEE7ED',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopEndRadius: calcFont(15),
    borderBottomEndRadius: calcFont(15),
    marginBottom: 10,
  },
  endText: {
    fontSize: FONT_18,
    fontWeight: '600',
    color: RED_COLOR,
  },
  reviewedContainer: {
    width: calcWidth(200),
    height: calcHeight(65),
    backgroundColor: GREEN50,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderTopEndRadius: calcFont(15),
    borderBottomEndRadius: calcFont(15),
  },
  reportReviewedText: {
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: '#11a99d',
  },
  reportRevieweddate: {
    fontSize: 14,
    fontWeight: '600',
    fontStyle: 'normal',
    color: '#11a99d',
  },
});
