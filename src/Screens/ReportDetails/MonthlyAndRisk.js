import React, {useRef} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {
  Block,
  CommentImadeAndDescriptionCard,
  DialogueModal,
  Header,
  ReportHeader,
  ReportSubHeader,
  StepNumberAndReportName,
} from '../../Components';
import RepliesModal from '../../Components/RepliesModal';
import {
  FONT_18,
  FONT_22,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  WHITE_COLOR,
} from '../../constants/design/colorsAndSizes';
import {MONTHLY_REPORT_DATA} from '../../constants/design/MockData';
const MonthlyAndRisk = ({navigation, route}) => {
  const {category, date} = route.params;
  const repliesModalRef = useRef(null);
  const [showSignatureModal, setshowSignatureModal] = React.useState(false);
  const [signature, setsignature] = React.useState(null);

  const showSignatue = () => setshowSignatureModal(true);
  const hideSignature = () => {
    setshowSignatureModal(false);
  };

  const onConfirmSignature = (par) => {
    setsignature(par);
  };
  return (
    <View style={[styles.container]}>
      <Header back />
      <ReportSubHeader
        reportName={`${category} ${
          category.includes('report') ? '' : 'report'
        }`}
        reportDate={`${date}`}
        onRepliesButtonPressed={() => repliesModalRef.current.open()}
        repliesNumber={10}
      />

      <Block containerStyle={{height: 'auto', marginVertical: 10}}>
        <FlatList
          data={MONTHLY_REPORT_DATA}
          keyExtractor={(item, index) => `${index}`}
          contentContainerStyle={{
            flexGrow: 1,
            paddingBottom: SCREEN_HEIGHT / 3.5,
          }}
          renderItem={({item: {title, description, image}, index}) => {
            return (
              <>
                <StepNumberAndReportName />
                <View style={{marginVertical: 5}}>
                  <ReportHeader
                    containerStyle={{marginVertical: 5}}
                    number={index + 1}
                    headerName={title}
                  />
                  <CommentImadeAndDescriptionCard
                    commentImage={image}
                    description={description}
                    containerStyle={{width: '100%'}}
                  />
                </View>
              </>
            );
          }}
        />
      </Block>
      <RepliesModal reference={repliesModalRef} />
    </View>
  );
};

export {MonthlyAndRisk};

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    alignItems: 'center',
    backgroundColor: WHITE_COLOR,
  },
});
