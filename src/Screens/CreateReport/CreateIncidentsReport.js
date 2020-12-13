import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Clock, log} from 'react-native-reanimated';
import {
  CustomButton,
  CustomCheckBox,
  CustomDropdown,
  CustomText,
  Header,
  ReportHeader,
  SignatureModal,
  WheelDatePicker,
} from '../../Components';
import CommentInput from '../../Components/CommentInput';
import ScreenNameAndDate from '../../Components/ScreenNameAndDate';
import {
  FONT_16,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  WHITE_COLOR,
} from '../../constants/design/colorsAndSizes';
import {ClockIcon, DurationIcon, SignatureIcon} from '../../Svgs';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import RNFS from 'react-native-fs';
dayjs.extend(localizedFormat);
const checkBoxList = (data, numColumns) => {
  return (
    <FlatList
      data={[1, 2, 3, 4]}
      numColumns={3}
      columnWrapperStyle={{
        height: SCREEN_HEIGHT / 20,
        // // backgroundColor: '#586',
        // width: '100%',
        // alignSelf: 'center',
        // //justifyContent: 'space-between',
        // alignItems: 'center',
        marginVertical: 8,
      }}
      keyExtractor={(item, index) => `${index}`}
      renderItem={({item, index}) => {
        return (
          <View
            style={{
              // flex: 1 / 3,
              alignItems: 'center',
              // backgroundColor: 'red',
            }}>
            <CustomCheckBox label={'+6 Monthly'} />
          </View>
        );
      }}
    />
  );
};
const CreateIncidentsReport = ({screenName}) => {
  const [dateTime, setdateTime] = React.useState(new Date());
  const [showSignatureModal, setshowSignatureModal] = React.useState(false);
  const [signature, setsignature] = React.useState(null);
  const signatureRef = React.useRef();

  const onDateTimeChange = (dateTime) => {
    setdateTime(dateTime);
  };
  const openSignatureModal = () => setshowSignatureModal(true);
  const closeSignatureModal = () => {
    setshowSignatureModal(false);
    signatureRef.current?.readSignature();
  };
  const onConfirmSignatue = (signature) => {
    setsignature(signature);
    /*  RNFS.writeFile(imagePath, imageData, 'base64').then(() =>
      console.log('Image converted to jpg and saved at ' + imagePath),
    ); */
  };
  return (
    <View style={[styles.container]}>
      <KeyboardAwareScrollView
        style={[styles.container]}
        enableOnAndroid
        stickyHeaderIndices={[0]}
        contentContainerStyle={{
          // backgroundColor: 'red',
          width: '95%',
          alignSelf: 'center',
        }}>
        <Header back />
        <ScreenNameAndDate screenName={screenName} />

        <ReportHeader
          containerStyle={styles.reportHeaderStyle}
          headerName="select branch"
        />
        <CustomDropdown />
        <ReportHeader
          containerStyle={styles.reportHeaderStyle}
          headerName="title"
        />
        <CommentInput />

        <ReportHeader
          containerStyle={styles.reportHeaderStyle}
          headerName="i'm reporting about"
        />
        <View style={{width: SCREEN_WIDTH}}>{checkBoxList()}</View>
        <ReportHeader
          containerStyle={styles.reportHeaderStyle}
          headerName="Have you told your manager about this Incident ?"
        />
        {checkBoxList()}
        {/* date Time */}
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
          containerStyle={styles.reportHeaderStyle}
          headerName="Names of witnesses ( If any )"
        />
        <CommentInput />

        <ReportHeader
          containerStyle={styles.reportHeaderStyle}
          headerName="Names of witnesses ( If any )"
        />
        <CommentInput />
        <ReportHeader
          containerStyle={styles.reportHeaderStyle}
          headerName="Names of witnesses ( If any )"
        />
        <CommentInput />
        <ReportHeader
          containerStyle={styles.reportHeaderStyle}
          headerName="Names of witnesses ( If any )"
        />
        <CommentInput />
        <ReportHeader
          containerStyle={styles.reportHeaderStyle}
          headerName="Names of witnesses ( If any )"
        />
        <CommentInput />
        <ReportHeader
          containerStyle={styles.reportHeaderStyle}
          headerName="Names of witnesses ( If any )"
        />
        <CommentInput />

        <ReportHeader
          containerStyle={styles.reportHeaderStyle}
          headerName="Did anyone suffer a injury resulting from this incident ? "
        />
        {checkBoxList()}
        <ReportHeader
          containerStyle={styles.reportHeaderStyle}
          headerName="Chance of the near miss , incident or accident recurring"
        />
        {checkBoxList()}
        <ReportHeader
          containerStyle={styles.reportHeaderStyle}
          headerName=" your signature"
        />
        <View style={styles.signatureContainer}>
          <SignatureIcon onPress={openSignatureModal} />
          {!signature ? (
            <CustomText
              text="draw your Signature"
              onPress={openSignatureModal}
            />
          ) : (
            <Image
              source={{uri: signature}}
              style={{width: '100%', height: 100}}
            />
          )}
        </View>
        {/* <CustomText text="draw your Signature" /> */}
        <CustomButton containerStyle={{marginVertical: 10}} />
      </KeyboardAwareScrollView>
      <SignatureModal
        visible={showSignatureModal}
        hideSignatureModal={closeSignatureModal}
        onConfirmSignature={onConfirmSignatue}
        reference={signatureRef}
      />
    </View>
  );
};

export default CreateIncidentsReport;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    /*    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT, */
    backgroundColor: WHITE_COLOR,
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
  signatureContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
