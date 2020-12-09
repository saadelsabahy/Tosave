import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  CustomCheckBox,
  CustomDropdown,
  Header,
  ReportHeader,
  WheelDatePicker,
} from '../../Components';
import CommentInput from '../../Components/CommentInput';
import ScreenNameAndDate from '../../Components/ScreenNameAndDate';
import {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  WHITE_COLOR,
} from '../../constants/design/colorsAndSizes';

const CreateIncidentsReport = ({screenName}) => {
  return (
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

      <CustomDropdown />
      <CommentInput />

      <ReportHeader />
      <View style={{width: SCREEN_WIDTH}}>
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7]}
          numColumns={3}
          columnWrapperStyle={{
            // backgroundColor: '#586',
            width: '100%',
            alignSelf: 'center',
            //justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: 8,
          }}
          keyExtractor={(item, index) => `${index}`}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  flex: 1 / 3,
                  alignItems: 'center',
                  // backgroundColor: 'red',
                }}>
                <CustomCheckBox label={'+6 Monthly'} />
              </View>
            );
          }}
        />
      </View>
      <WheelDatePicker />
    </KeyboardAwareScrollView>
  );
};

export default CreateIncidentsReport;

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    backgroundColor: WHITE_COLOR,
  },
});
