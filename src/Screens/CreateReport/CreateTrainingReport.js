import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  Block,
  CalendarPickerRange,
  CustomButton,
  CustomDropdown,
  CustomText,
  Header,
  ReportHeader,
  UserSection,
} from '../../Components';
import {
  FONT_25,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  WHITE_COLOR,
} from '../../constants/design/colorsAndSizes';
import {
  KeyboardAwareScrollView,
  KeyboardAwareFlatList,
} from 'react-native-keyboard-aware-scroll-view';
import CommentInput from '../../Components/CommentInput';
import {FlatList} from 'react-native-gesture-handler';
const CreateTrainingReport = ({screenName}) => {
  const [checked, setchecked] = useState([]);
  // debugger;
  const onCheckChange = React.useCallback(
    (index) => {
      console.log(checked);
      setchecked([...checked, index]);
      //debugger;
      // const newChecked = [...checked];

      // if (checked.includes(index)) {

      // }
      // setchecked([...newChecked, index]);
      /* newChecked.filter((item) => item != index); */
    },
    [checked],
  );
  React.useEffect(() => {
    return () => {};
  }, [checked]);
  return (
    <KeyboardAwareScrollView
      style={[styles.container]}
      stickyHeaderIndices={[0]}
      enableOnAndroid>
      <Header back notificationsNumber={1000} />
      <Block
        containerStyle={{
          //backgroundColor: 'red',
          height: 'auto',
          alignSelf: 'center',
          justifyContent: 'space-evenly',
        }}>
        <CustomText text={screenName} textStyle={styles.screenName} />
        <ReportHeader
          headerName={'Select the date'}
          containerStyle={styles.reportHeaderStyle}
        />
        <CalendarPickerRange allowRangeSelection={false} />
        <ReportHeader
          headerName={'Details of report'}
          containerStyle={styles.reportHeaderStyle}
        />
        <CommentInput scrollEnabled={false} />
        <ReportHeader
          containerStyle={styles.reportHeaderStyle}
          headerName={'Select the branch and employee'}
        />
        <CustomDropdown />
        <View style={{flex: 1}}>
          <FlatList
            data={[1, 2, 3, 4, 5]}
            ListFooterComponent={() => (
              <CustomButton containerStyle={{marginVertical: 10}} />
            )}
            keyExtractor={(item, index) => `${index}`}
            // extraData={checked}
            renderItem={({item, index}) => {
              return (
                <UserSection
                  checkBox
                  containerStyle={{marginVertical: 8}}
                  onCheckChange={() => onCheckChange(index)}
                  checkValue={checked.includes(index)}
                />
              );
            }}
          />
        </View>
      </Block>
    </KeyboardAwareScrollView>
  );
};

export default CreateTrainingReport;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    /*     width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT, */
    backgroundColor: WHITE_COLOR,
    // alignItems: 'center',
    /* paddingBottom: 40, */
  },
  screenName: {
    fontSize: FONT_25,
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: '#263231',
  },
  reportHeaderStyle: {
    padding: 8,
    marginVertical: 8,
  },
});
