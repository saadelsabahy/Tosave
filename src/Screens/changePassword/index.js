import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
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

const ChangePassword = ({navigation}) => {
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={[styles.container]}>
      <KeyboardAwareScrollView
        style={[styles.KeyboardAwareScrollView]}
        contentContainerStyle={{alignItems: 'center'}}
        enableOnAndroid
        extraScrollHeight={INPUTS_AND_BUTTONS_HEIGHT}>
        <Block>
          <Header
            back
            noPhoto
            notificationsNumber={10}
            notificationIconContainerStyle={
              styles.notificationIconContainerStyle
            }
            goBack={goBack}
          />

          <View style={[styles.screenNameContainer]}>
            <CustomText
              text={'change password'}
              textStyle={[styles.screenName]}
            />
          </View>

          <View style={[styles.photoContainer]}>
            <ChangePasswordLock />
            <View
              style={{
                position: 'absolute',
                top: 0,
                start: -40,
                opacity: 0.07,
                //backgroundColor: 'red',
                height: '95%',
                width: '70%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ChangePasswordLock width={'100%'} height={'100%'} />
            </View>
          </View>

          <View style={[styles.inputsContainer]}>
            <LoginInput
              label={'old password'}
              containerStyle={{marginBottom: 10}}
            />
            <LoginInput
              label={'old password'}
              containerStyle={{marginBottom: 20}}
            />
            <CustomButton />
          </View>
        </Block>
      </KeyboardAwareScrollView>
    </View>
  );
};

export {ChangePassword};

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    backgroundColor: WHITE_COLOR,
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
    height: SCREEN_HEIGHT / 2.5,
    justifyContent: 'center',
    //backgroundColor: '#ddd',
  },
  inputsContainer: {
    width: '100%',
    height: SCREEN_HEIGHT / 2,
  },
});
