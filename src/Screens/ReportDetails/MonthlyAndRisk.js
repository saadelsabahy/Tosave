import React, {useRef} from 'react';
import {
  FlatList,
  I18nManager,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
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
import {useTranslation} from 'react-i18next';

const MonthlyAndRisk = ({navigation, route}) => {
  const {t} = useTranslation();
  const {category, category_ar, date} = route.params;
  const CATTEGORY = I18nManager.isRTL ? category_ar : category;
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
        reportName={`${CATTEGORY} ${
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
          renderItem={({
            item: {title, description, image, title_ar, description_ar},
            index,
          }) => {
            return (
              <>
                <StepNumberAndReportName />
                <View style={{marginVertical: 5}}>
                  <ReportHeader
                    containerStyle={{marginVertical: 5}}
                    number={index + 1}
                    headerName={I18nManager.isRTL ? title_ar : title}
                  />
                  <CommentImadeAndDescriptionCard
                    commentImage={image}
                    description={
                      I18nManager.isRTL ? description_ar : description
                    }
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
