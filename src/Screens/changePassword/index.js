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
import {
  FONT_25,
  INPUTS_AND_BUTTONS_HEIGHT,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  WHITE_COLOR,
} from '../../constants/design/colorsAndSizes';
import {ChangePasswordLock} from '../../Svgs';
import {useTranslation} from 'react-i18next';
const ChangePassword = ({navigation}) => {
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
              text={t('login:changePassword')}
              textStyle={[styles.screenName]}
            />
          </View>

          <View style={[styles.photoContainer]}>
            <ChangePasswordLock />
            <View style={styles.absoluteLockContainer}>
              <ChangePasswordLock width={'100%'} height={'100%'} />
            </View>
          </View>

          <View style={[styles.inputsContainer]}>
            <LoginInput
              label={t('login:oldPassword')}
              containerStyle={{marginBottom: 10}}
            />
            <LoginInput
              label={t('login:newPassword')}
              containerStyle={{marginBottom: 20}}
            />
            <CustomButton buttonText={t('editInfo:saveChanges')} />
          </View>
        </Block>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export {ChangePassword};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
  },
  KeyboardAwareScrollView: {
    flex: 1,
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
    width: '60%',
    height: SCREEN_HEIGHT * 0.35,
    justifyContent: 'center',
    alignItems: 'center',
    start: -20,
  },
  inputsContainer: {
    height: SCREEN_HEIGHT * 0.65,
    width: '100%',
    //justifyContent: 'center',
  },
  absoluteLockContainer: {
    position: 'absolute',
    top: 0,
    start: 0,
    opacity: 0.07,
    //backgroundColor: 'red',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
