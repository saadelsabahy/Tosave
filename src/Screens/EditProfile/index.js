import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Block,
  CustomButton,
  CustomText,
  Header,
  LoginInput,
} from '../../Components';
import PhotoRecangle from '../../Components/PhotoRecangle';
import {
  FONT_25,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from '../../constants/design/colorsAndSizes';
import {useTranslation} from 'react-i18next';

const EditProfile = ({navigation}) => {
  const {t} = useTranslation();

  const goBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={[styles.container]}>
      <KeyboardAwareScrollView
        style={[styles.KeyboardAwareScrollView]}
        contentContainerStyle={{alignItems: 'center'}}
        enableOnAndroid
        extraScrollHeight={0}
        extraHeight={0}
        enableAutomaticScroll
        stickyHeaderIndices={[0]}>
        <View style={{width: '100%'}}>
          <Header
            back
            noPhoto
            notificationsNumber={10}
            notificationIconContainerStyle={
              styles.notificationIconContainerStyle
            }
            goBack={goBack}
          />
        </View>
        <Block>
          <View style={[styles.screenNameContainer]}>
            <CustomText
              text={t('drawer:editProfile')}
              textStyle={[styles.screenName]}
            />
          </View>

          <View style={[styles.photoContainer]}>
            <PhotoRecangle
              pickIcon
              containerStyle={{width: '50%', height: '80%'}}
              /* onAvatarPressed={() => console.log('a')} */
              pickText={t('editInfo:changePhoto')}
            />
          </View>

          <View style={[styles.inputsContainer]}>
            <LoginInput
              label={t('login:userName')}
              containerStyle={{marginVertical: 20}}
            />
            <CustomButton buttonText={t('editInfo:saveChanges')} />
          </View>
        </Block>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export {EditProfile};

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  KeyboardAwareScrollView: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  screenNameContainer: {
    width: '95%',
    height: SCREEN_HEIGHT / 20,
    alignSelf: 'center',
  },
  notificationIconContainerStyle: {
    width: 50,
    alignSelf: 'flex-end',
  },
  screenName: {
    fontSize: FONT_25,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#263231',
  },
  photoContainer: {
    width: '100%',
    height: SCREEN_HEIGHT / 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputsContainer: {
    width: '100%',
    height: SCREEN_HEIGHT / 2,
  },
});
