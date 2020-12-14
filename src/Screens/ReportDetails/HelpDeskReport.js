import React, {useRef} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  Block,
  CommentImadeAndDescriptionCard,
  CustomButton,
  CustomText,
  DialogueModal,
  Header,
  ReportHeader,
  ReportSubHeader,
  StepNumberAndReportName,
} from '../../Components';
import RepliesModal from '../../Components/RepliesModal';
import {
  calcHeight,
  calcWidth,
  FONT_18,
  FONT_22,
  GREEN100,
  RED_COLOR,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  TEXT_BLACK,
  WHITE_COLOR,
} from '../../constants/design/colorsAndSizes';
import {MONTHLY_REPORT_DATA} from '../../constants/design/MockData';
const HelpDeskReport = ({category, date}) => {
  const repliesModalRef = useRef(null);
  const dialoguRef = useRef(null);
  const [dialogueType, setdialogueType] = React.useState('');

  const updateModalTypeAndOpenModal = (type) => {
    setdialogueType(type);
    dialoguRef.current.open();
  };
  const onCancelPressed = () => {
    console.log('cancel pressed');
    dialoguRef.current.close();
  };
  const onEndPressed = () => {
    console.log('end pressed');
    dialoguRef.current.close();
  };

  return (
    <>
      <DialogueModal
        reference={dialoguRef}
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
      <RepliesModal reference={repliesModalRef} />
      <KeyboardAwareScrollView
        style={styles.container}
        enableOnAndroid
        stickyHeaderIndices={[0]}
        contentContainerStyle={{alignItems: 'center'}}>
        <View style={{width: '97%', alignSelf: 'center'}}>
          <Header back headerStyle={{width: '100%'}} />
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
            alignSelf: 'center',
          }}>
          <ReportHeader
            headerName={'The branch'}
            containerStyle={styles.reportHeaderStyle}
          />
          <CustomText text={'branch name'} />

          <ReportHeader
            headerName={'Details of report'}
            containerStyle={styles.reportHeaderStyle}
          />
          <CustomText
            text={
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)"
            }
            numberOfLines={3}
          />
          <ReportHeader
            headerName={'The entity'}
            containerStyle={styles.reportHeaderStyle}
          />
          <CustomText text={'The entity name'} />
          <ReportHeader
            headerName={'The entity'}
            containerStyle={styles.reportHeaderStyle}
          />
          <FlatList
            data={MONTHLY_REPORT_DATA}
            keyExtractor={(item, index) => `${index}`}
            horizontal
            renderItem={({item: {title, description, image}, index}) => {
              return (
                <CommentImadeAndDescriptionCard
                  commentImage={image}
                  description={description}
                  descriptionStyle={{paddingVertical: 10}}
                  containerStyle={{
                    width: calcWidth(183),
                    marginEnd: 5,
                    height: calcHeight(295),
                  }}
                />
              );
            }}
          />
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
        </Block>
      </KeyboardAwareScrollView>
    </>
  );
};

export {HelpDeskReport};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    // alignItems: 'center',
    backgroundColor: WHITE_COLOR,
  },
  reportHeaderStyle: {padding: 12, marginVertical: 8, alignItems: 'center'},
  buttonsContainer: {
    marginVertical: 15,
  },
  button: {
    marginBottom: 10,
  },
});
