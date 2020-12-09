import React from 'react';
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
          headerName={'jehrkjfbkf'}
          containerStyle={{marginVertical: 8}}
        />
        <CalendarPickerRange allowRangeSelection={false} />
        <ReportHeader
          headerName={'jehrkjfbkf'}
          containerStyle={{marginVertical: 8}}
        />
        <CommentInput scrollEnabled={false} />
        <ReportHeader containerStyle={{marginVertical: 8}} />
        <CustomDropdown />
        <View style={{flex: 1, paddingBottom: 45}}>
          <FlatList
            data={[]}
            ListFooterComponent={() => (
              <CustomButton containerStyle={{marginTop: 10}} />
            )}
            keyExtractor={(item, index) => `${index}`}
            renderItem={({item, index}) => {
              return <UserSection checkBox />;
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
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    backgroundColor: WHITE_COLOR,
    // alignItems: 'center',
  },
  screenName: {
    fontSize: FONT_25,
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: '#263231',
  },
});
