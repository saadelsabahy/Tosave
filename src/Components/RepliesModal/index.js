import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {
  FONT_16,
  FONT_25,
  GREEN100,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from '../../constants/design/colorsAndSizes';
import {MONTHLY_REPORT_DATA} from '../../constants/design/MockData';
import {RepliesIcon} from '../../Svgs';
import {CustomBottomSheet} from '../BottomSheet';
import {CommentImadeAndDescriptionCard} from '../CommentImageAndDescriptionCard';
import CommentInput from '../CommentInput';
import {CustomButton} from '../CustomButton';
import {CustomText} from '../customText';
import PhotoRecangle from '../PhotoRecangle';
import {ReportHeader} from '../ReportHeader';
import {useTranslation} from 'react-i18next';

const RepliesModal = ({reference}) => {
  const {t} = useTranslation();
  return (
    <CustomBottomSheet
      snapPoints={SCREEN_HEIGHT * 0.95}
      keyboardVerticalOffset={0}
      flatListProps={{
        data: MONTHLY_REPORT_DATA,
        removeClippedSubviews: false,
        renderItem: ({item: {title, description, image}, index}) => {
          return (
            <View style={{marginVertical: 5}}>
              <View style={styles.userInfoContainer}>
                <PhotoRecangle />
                <View style={[styles.userNameAndTimeContainer]}>
                  <CustomText
                    text={'saad elsabahy'}
                    textStyle={styles.nameStyle}
                  />
                  <CustomText
                    text={'saad elsabahy'}
                    textStyle={styles.dateStyle}
                  />
                </View>
              </View>
              <CommentImadeAndDescriptionCard
                commentImage={image}
                description={description}
                containerStyle={{width: '100%'}}
              />
            </View>
          );
        },
        keyExtractor: (item, index) =>
          item && item.id ? item.id.toString() : index,
        showsVerticalScrollIndicator: false,
      }}
      referance={reference}
      HeaderComponent={() => (
        <View style={[styles.headerContainer]}>
          <RepliesIcon fill={GREEN100} />
          <CustomText
            text={t('comments:comments')}
            textStyle={styles.headerText}
          />
        </View>
      )}
      FooterComponent={() => {
        return (
          <View
            style={{
              height: SCREEN_HEIGHT / 3.5,
              justifyContent: 'space-evenly',
              width: '100%',
              alignItems: 'center',
            }}>
            <CommentInput />
            <CustomButton
              containerStyle={{width: '95%'}}
              buttonText={t('comments:send')}
            />
          </View>
        );
      }}
    />
  );
};

export default RepliesModal;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    width: SCREEN_WIDTH * 0.9,
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 3,
    //backgroundColor: '#ddd',
  },
  headerText: {
    fontSize: FONT_25,
    fontWeight: 'bold',
    color: '#11a99d',
    marginStart: 8,
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  userNameAndTimeContainer: {
    marginStart: 8,
  },
  nameStyle: {
    fontSize: FONT_16 - 1,
    fontWeight: 'bold',
    color: '#263231',
  },
  dateStyle: {
    fontSize: FONT_16 - 2,
    fontWeight: 'bold',
    color: '#777',
  },
});

/* <View>
        <FlatList
          data={MONTHLY_REPORT_DATA}
          keyExtractor={(item, index) => `${index}`}
          // ListFooterComponent={() => {}}
          contentContainerStyle={{
            paddingBottom: SCREEN_HEIGHT / 5,
          }}
          renderItem={({item: {title, description, image}, index}) => {
            return (
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
            );
          }}
        />
      </View>
    </CustomBottomSheet> */
