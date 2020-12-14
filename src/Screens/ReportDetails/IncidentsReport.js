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
  DialogueModal,
  Header,
  ReportHeader,
  SignatureModal,
  WheelDatePicker,
} from '../../Components';
import CommentInput from '../../Components/CommentInput';
import ScreenNameAndDate from '../../Components/ScreenNameAndDate';
import {
  FONT_16,
  GREEN100,
  RED_COLOR,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  TEXT_BLACK,
  WHITE_COLOR,
} from '../../constants/design/colorsAndSizes';
import {ClockIcon, DurationIcon, SignatureIcon} from '../../Svgs';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import RNFS from 'react-native-fs';
dayjs.extend(localizedFormat);

const IncidentsReport = ({category, signature, dateTime}) => {
  const dialogueRef = React.useRef();
  const [dialogueType, setdialogueType] = React.useState('');

  const updateModalTypeAndOpenModal = (type) => {
    setdialogueType(type);
    dialogueRef.current.open();
  };
  const onCancelPressed = () => {
    console.log('cancel pressed');
    dialogueRef.current.close();
  };
  const onEndPressed = () => {
    console.log('end pressed');
    dialogueRef.current.close();
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
        <ScreenNameAndDate screenName={category} />

        <ReportHeader
          containerStyle={styles.reportHeaderStyle}
          headerName="Branch name"
        />
        <CustomText
          numberOfLines={3}
          textStyle={styles.text}
          text={'branch name'}
        />
        <ReportHeader
          containerStyle={styles.reportHeaderStyle}
          headerName="title"
        />
        <CustomText
          numberOfLines={3}
          textStyle={styles.text}
          text="Title of incident"
        />

        <ReportHeader
          containerStyle={styles.reportHeaderStyle}
          headerName="i'm reporting about"
        />
        <CustomText
          numberOfLines={3}
          textStyle={styles.text}
          text="report about"
        />
        <ReportHeader
          containerStyle={styles.reportHeaderStyle}
          headerName="Have you told your manager about this Incident ?"
        />
        <CustomText numberOfLines={3} textStyle={styles.text} text="yes" />
        {/* date Time */}
        <ReportHeader
          containerStyle={styles.reportHeaderStyle}
          headerName="selected time and date"
        />
        <View style={styles.dateTimeInfoContainer}>
          <View style={styles.dateTimeItemContainer}>
            <ClockIcon />
            <CustomText
              numberOfLines={3}
              textStyle={styles.text}
              text={dayjs(dateTime).format('LT').toString()}
            />
          </View>

          <View style={styles.dateTimeItemContainer}>
            <DurationIcon />
            <CustomText
              numberOfLines={3}
              textStyle={styles.text}
              text={dayjs(dateTime).format('D-M-YYYY').toString()}
            />
          </View>
        </View>

        <ReportHeader
          containerStyle={styles.reportHeaderStyle}
          headerName="Names of witnesses ( If any )"
        />
        <CustomText
          numberOfLines={3}
          textStyle={styles.text}
          text="random text"
        />

        <ReportHeader
          containerStyle={styles.reportHeaderStyle}
          headerName="Names of witnesses ( If any )"
        />
        <CustomText
          numberOfLines={3}
          textStyle={styles.text}
          text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

"
        />
        <ReportHeader
          containerStyle={styles.reportHeaderStyle}
          headerName="Where exactly , did it happen ?"
        />
        <CustomText
          numberOfLines={3}
          textStyle={styles.text}
          text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

"
        />
        <ReportHeader
          containerStyle={styles.reportHeaderStyle}
          headerName="What were you doing at the time ? "
        />
        <CustomText
          numberOfLines={3}
          textStyle={styles.text}
          text="random text"
        />
        <ReportHeader
          containerStyle={styles.reportHeaderStyle}
          headerName="Provide a detailed descriptions of incident"
        />
        <CustomText
          numberOfLines={3}
          textStyle={styles.text}
          text="random text"
        />
        <ReportHeader
          containerStyle={styles.reportHeaderStyle}
          headerName="What could have been done to prevent this
          incident from happening ? "
        />
        <CustomText
          numberOfLines={3}
          textStyle={styles.text}
          text="random text"
        />
        <ReportHeader
          containerStyle={styles.reportHeaderStyle}
          headerName="What was your immediate action when this
          incident happened ? "
        />
        <CustomText
          numberOfLines={3}
          textStyle={styles.text}
          text="random text"
        />
        <ReportHeader
          containerStyle={styles.reportHeaderStyle}
          headerName="Did anyone suffer a injury resulting from this incident ? "
        />
        <CustomText
          numberOfLines={3}
          textStyle={styles.text}
          text="random text"
        />
        <ReportHeader
          containerStyle={styles.reportHeaderStyle}
          headerName="Chance of the near miss , incident or accident recurring"
        />
        <CustomText
          numberOfLines={3}
          textStyle={styles.text}
          text="random text"
        />
        <ReportHeader
          containerStyle={styles.reportHeaderStyle}
          headerName=" your signature"
        />

        {signature && (
          <Image
            source={{uri: signature}}
            style={{width: '100%', height: 100}}
          />
        )}

        <View style={styles.buttonsContainer}>
          <CustomButton
            containerStyle={styles.button}
            buttonColor={RED_COLOR}
            onPress={() => updateModalTypeAndOpenModal('cancel')}
            buttonText={'cancel report'}
          />
          <CustomButton
            containerStyle={styles.button}
            buttonColor={TEXT_BLACK}
            onPress={() => updateModalTypeAndOpenModal('end')}
            buttonText={'end report'}
          />
        </View>
      </KeyboardAwareScrollView>
      <DialogueModal
        reference={dialogueRef}
        headerText={`${dialogueType} report`}
        DialogueButtonText={dialogueType}
        dialogueSentance={'Are you sure to delete this employe ?'}
        headerTextStyle={{color: dialogueType == 'end' ? GREEN100 : RED_COLOR}}
        DialogeButtonColor={dialogueType == 'end' ? TEXT_BLACK : RED_COLOR}
        onDialogueButtonPressed={
          dialogueType == 'end' ? onEndPressed : onCancelPressed
        }
        /* icon={dialogueType == 'delete' && <DeleteIcon />} */
      />
    </View>
  );
};

export default IncidentsReport;

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
  text: {
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
  buttonsContainer: {
    marginVertical: 15,
  },
  button: {
    marginBottom: 10,
  },
});
