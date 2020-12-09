import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  Block,
  CustomButton,
  CustomText,
  DamageType,
  Header,
  ImageGrid,
  ReportHeader,
  StepNumberAndReportName,
} from '../../Components';
import CommentInput from '../../Components/CommentInput';
import ScreenNameAndDate from '../../Components/ScreenNameAndDate';
import {
  FONT_22,
  INPUTS_AND_BUTTONS_HEIGHT,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  WHITE_COLOR,
} from '../../constants/design/colorsAndSizes';
import ImagePicker from 'react-native-image-crop-picker';
import {MONTHLY_REPORT_JSON_FORM} from '../../constants/design/MockData';
import {removeSymbolsFromString} from '../../utils';
import {useForm, Controller} from 'react-hook-form';
import validation from '../../utils/validation';
const CreateMonthlyReport = ({
  reportName,
  screenName,
  reportDate,
  data = MONTHLY_REPORT_JSON_FORM,
  step,
}) => {
  const [images, setimages] = useState([]);
  const [imagesAndInputs, setimagesAndInputs] = useState({});

  const {
    register,
    setValue,
    handleSubmit,
    errors,
    reset,
    setError,
    control,
  } = useForm(/* {
    mode: 'all',
    reValidateMode: 'all',
    defaultValues: {pumpsetpanel: '', Pressuregauge: ''},
    resolver: undefined,
    context: undefined,
    criteriaMode: 'firstErrorDetected',
    shouldFocusError: true,
    shouldUnregister: true,
  } */);

  const onLoadImagesPressed = (name) => {
    console.log(name);
    ImagePicker.openPicker({
      multiple: true,
    })
      .then((SelectedImages) => {
        const selectedImagesUris = SelectedImages.map(
          (item, index) => item.path,
        );
        console.log(SelectedImages);
        setimagesAndInputs({...imagesAndInputs, [name]: selectedImagesUris});
      })
      .catch((e) => console.log(e));
  };
  const onDeleteImagePressed = (index, name) => {
    if (index > -1) {
      const currentImages = [...imagesAndInputs[name]];
      currentImages.splice(index, 1);
      setimagesAndInputs({...imagesAndInputs, [name]: currentImages});
    }
  };
  const deleteAllImages = (name) => {
    setimagesAndInputs({...imagesAndInputs, [name]: []});
  };

  const onButtonPressed = (data) => {
    console.log('press');
    console.log(data);
    reset();
  };
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={[styles.container]}
        contentContainerStyle={[styles.contentContainerStyle]}
        resetScrollToCoords={{x: 0, y: 0}}
        enableOnAndroid
        automaticallyAdjustContentInsets={false}
        keyboardShouldPersistTaps="handled"
        scrollEventThrottle={10}
        stickyHeaderIndices={[0]}>
        {/* header */}
        <View style={{width: SCREEN_WIDTH}}>
          <Header back notificationsNumber={10} />
        </View>
        {/* screen name and date */}
        <ScreenNameAndDate screenName={screenName} date={reportDate} />
        {/* step and report name */}

        <StepNumberAndReportName step={step} reportName={reportName} />

        {/* Report */}
        <View style={{flex: 1}}>
          <FlatList
            data={data}
            keyExtractor={(item, index) => `${index}`}
            contentContainerStyle={{
              paddingBottom: INPUTS_AND_BUTTONS_HEIGHT / 2,
              justifyContent: 'space-between',
            }}
            ListFooterComponent={() => (
              <CustomButton
                containerStyle={{marginVertical: 10}}
                onPress={handleSubmit(onButtonPressed)}
              />
            )}
            renderItem={({item: {title, subtitles}, index}) => {
              return (
                <Block containerStyle={{marginTop: 20, height: 'auto'}}>
                  <ReportHeader number={index + 1} headerName={title} />

                  {subtitles?.length ? (
                    <FlatList
                      data={subtitles}
                      horizontal
                      keyExtractor={(item, index) => `${index}`}
                      renderItem={({item, index}) => {
                        return (
                          <View>
                            {subtitles?.length && (
                              <DamageType
                                type={item}
                                containerStyle={{marginTop: 10}}
                              />
                            )}
                            <ImageGrid
                              images={
                                imagesAndInputs?.[
                                  `${removeSymbolsFromString(item)}Image`
                                ]
                              }
                              onDeleteImagePressed={onDeleteImagePressed}
                              onDeleteAllImagesPressed={deleteAllImages}
                              small={subtitles?.length}
                              containerStyle={{marginEnd: 10}}
                              onAddImagesPressed={onLoadImagesPressed}
                              name={`${removeSymbolsFromString(item)}Image`}
                            />
                          </View>
                        );
                      }}
                    />
                  ) : (
                    <>
                      {subtitles?.length && (
                        <DamageType
                          type={subtitles[0]}
                          containerStyle={{marginTop: 10}}
                        />
                      )}
                      <ImageGrid
                        images={
                          imagesAndInputs?.[
                            subtitles?.length
                              ? `${removeSymbolsFromString(subtitles[0])}Image`
                              : `${removeSymbolsFromString(title)}Image`
                          ]
                        }
                        onDeleteImagePressed={onDeleteImagePressed}
                        onDeleteAllImagesPressed={deleteAllImages}
                        small={subtitles?.length}
                        onAddImagesPressed={onLoadImagesPressed}
                        name={
                          subtitles?.length
                            ? `${removeSymbolsFromString(subtitles[0])}Image`
                            : `${removeSymbolsFromString(title)}Image`
                        }
                      />
                    </>
                  )}
                  <Controller
                    control={control}
                    render={({onChange, onBlur, value}) => (
                      <CommentInput
                        error={errors?.[`${removeSymbolsFromString(title)}`]}
                        onChangeText={(value) => onChange(value)}
                        onBlur={onBlur}
                        value={value}
                      />
                    )}
                    name={`${removeSymbolsFromString(title)}`}
                    rules={validation['comment']}
                    defaultValue=""
                  />
                </Block>
              );
            }}
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default CreateMonthlyReport;

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    backgroundColor: WHITE_COLOR,
  },
  contentContainerStyle: {
    alignItems: 'center',
    //paddingBottom: INPUTS_AND_BUTTONS_HEIGHT,
  },
  reportName: {
    fontSize: FONT_22 - 2,
    fontWeight: '600',
    fontStyle: 'normal',
    color: '#263231',
  },
  stepAndReportNameContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
