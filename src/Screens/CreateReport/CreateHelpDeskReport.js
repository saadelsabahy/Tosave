import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  Block,
  CustomButton,
  CustomDropdown,
  Header,
  ImageGrid,
  ReportHeader,
} from '../../Components';
import CommentInput from '../../Components/CommentInput';
import ScreenNameAndDate from '../../Components/ScreenNameAndDate';
import {WHITE_COLOR} from '../../constants/design/colorsAndSizes';

const CreateHelpDeskReport = ({category}) => {
  return (
    <KeyboardAwareScrollView style={styles.container} stickyHeaderIndices={[0]}>
      <Header back notificationsNumber={10} />
      <ScreenNameAndDate />
      <Block containerStyle={styles.block}>
        <ReportHeader
          containerStyle={styles.reportHeaderStyle}
          headerName="Details of report"
        />
        <CustomDropdown />
        <ReportHeader containerStyle={styles.reportHeaderStyle} />
        <CommentInput />

        <ReportHeader
          containerStyle={styles.reportHeaderStyle}
          headerName="Details of report"
        />
        <CustomDropdown />

        <ReportHeader
          containerStyle={styles.reportHeaderStyle}
          headerName="Details of report"
        />

        <View style={{flex: 1}}>
          <FlatList
            data={[1, 2, 3, 4, 5, 6]}
            horizontal
            keyExtractor={(item, index) => `${index}`}
            renderItem={({item, index}) => {
              return <ImageGrid small />;
            }}
          />
        </View>
        <CommentInput />
        <View style={{marginVertical: 10}}>
          <CustomButton />
        </View>
      </Block>
    </KeyboardAwareScrollView>
  );
};

export default CreateHelpDeskReport;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
  },
  block: {
    height: 'auto',
    alignSelf: 'center',
  },
  reportHeaderStyle: {padding: 12, marginVertical: 8, alignItems: 'center'},
});
