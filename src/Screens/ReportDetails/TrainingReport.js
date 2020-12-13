import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  CustomButton,
  CustomText,
  DialogueModal,
  Header,
  ReportHeader,
  UserSection,
} from '../../Components';
import ScreenNameAndDate from '../../Components/ScreenNameAndDate';
import {
  FONT_16,
  FONT_18,
  GREEN100,
  INPUTS_AND_BUTTONS_HEIGHT,
  RED_COLOR,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  TEXT_BLACK,
  WHITE_COLOR,
} from '../../constants/design/colorsAndSizes';
import {DeleteIcon, MonthlyCalendarIcon} from '../../Svgs';
import {USERS} from '../../constants/design/MockData';
const TrainingReport = ({
  screenName,
  notificationsNumber,
  dialogueSentance,
}) => {
  const dialogueRef = React.useRef();
  const [dialogueType, setdialogueType] = React.useState('');
  const [selectedUser, setselectedUser] = React.useState({});

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
  const onDeleteUserPressed = () => {
    console.log('delete pressed');
    dialogueRef.current.close();
  };
  const SubHeader = () => {
    return (
      <>
        <ScreenNameAndDate
          screenName={screenName}
          containerStyle={{height: 'auto'}}
        />

        <View style={[styles.branchNameAndDateContainer]}>
          <CustomText text={'branch Name'} textStyle={styles.branchName} />
          <CustomText
            text={'25 - 5 - 2020 12 : 30 PM'}
            textStyle={styles.branchDate}
          />
        </View>
      </>
    );
  };
  const onDeleteIconPressed = (user) => {
    setdialogueType('delete');
    setselectedUser(user);
    dialogueRef.current.open();
  };
  return (
    <>
      <KeyboardAwareScrollView
        style={[styles.container]}
        enableOnAndroid
        stickyHeaderIndices={[0]}
        contentContainerStyle={{
          width: '95%',
          alignSelf: 'center',
        }}>
        <Header back notificationsNumber={notificationsNumber || 10} />
        {SubHeader()}
        <ReportHeader
          headerName=" the date"
          containerStyle={styles.reportHeaderStyle}
        />
        <View style={styles.dateContainer}>
          <MonthlyCalendarIcon />
          <CustomText text={'25 - 5 - 2020'} textStyle={styles.date} />
        </View>

        <ReportHeader
          containerStyle={styles.reportHeaderStyle}
          headerName="Details of report"
        />
        <CustomText
          text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like"
          numberOfLines={3}
        />
        <ReportHeader
          containerStyle={styles.reportHeaderStyle}
          headerName="Employee list"
        />
        <View style={styles.listContainer}>
          <FlatList
            data={USERS}
            ListFooterComponent={() => (
              <View
                style={{
                  marginVertical: INPUTS_AND_BUTTONS_HEIGHT / 2,
                  justifyContent: 'space-evenly',
                }}>
                <CustomButton
                  buttonColor={RED_COLOR}
                  containerStyle={{marginVertical: 8}}
                  buttonText="cancel report"
                  onPress={() => updateModalTypeAndOpenModal('cancel')}
                />
                <CustomButton
                  buttonColor={TEXT_BLACK}
                  buttonText="end report"
                  onPress={() => updateModalTypeAndOpenModal('end')}
                />
              </View>
            )}
            keyExtractor={(item, index) => `${index}`}
            // extraData={checked}
            renderItem={({item, index}) => {
              const {name, id} = item;
              return (
                <UserSection
                  containerStyle={{marginVertical: 8}}
                  name={name}
                  id={id}
                  deleteIcon
                  onIconPressed={() => onDeleteIconPressed(item)}
                />
              );
            }}
          />
        </View>
      </KeyboardAwareScrollView>
      <DialogueModal
        headerText={`${dialogueType} ${
          dialogueType != 'delete' ? 'report' : 'employee'
        }`}
        reference={dialogueRef}
        DialogueButtonText={dialogueType}
        dialogueSentance={
          dialogueSentance || 'Are you sure to delete this employe ?'
        }
        headerTextStyle={{color: dialogueType == 'end' ? GREEN100 : RED_COLOR}}
        DialogeButtonColor={dialogueType == 'end' ? TEXT_BLACK : RED_COLOR}
        onDialogueButtonPressed={
          dialogueType == 'end'
            ? onEndPressed
            : dialogueType == 'cancel'
            ? onCancelPressed
            : onDeleteUserPressed
        }
        icon={dialogueType == 'delete' && <DeleteIcon />}>
        {['cancel', 'end'].includes(dialogueType) ? (
          SubHeader()
        ) : (
          <UserSection name={selectedUser.name} id={selectedUser.id} />
        )}
      </DialogueModal>
    </>
  );
};

export default TrainingReport;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: SCREEN_WIDTH,
    //  height: SCREEN_HEIGHT,
    backgroundColor: WHITE_COLOR,
  },
  branchNameAndDateContainer: {
    width: '95%',
    alignSelf: 'center',
    height: SCREEN_HEIGHT / 10,
    justifyContent: 'space-around',
  },
  branchName: {
    fontSize: FONT_18,
    fontWeight: '600',
    color: GREEN100,
  },
  branchDate: {
    fontSize: FONT_18,
    fontWeight: '600',
    color: '#777777',
  },
  reportHeaderStyle: {
    padding: 8,
    marginVertical: 8,
  },
  dateContainer: {flexDirection: 'row', alignItems: 'center'},
  listContainer: {flex: 1},
  date: {
    fontSize: FONT_16 - 1,
    fontWeight: '600',
    color: '#263231',
    marginStart: 8,
  },
});
