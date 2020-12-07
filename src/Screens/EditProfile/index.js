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
import PhotoRecangle from '../../Components/PhotoRecangle';
import {
  FONT_25,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from '../../constants/design/colorsAndSizes';

const EditProfile = () => {
  return (
    <View style={[styles.container]}>
      <KeyboardAwareScrollView
        style={[styles.KeyboardAwareScrollView]}
        contentContainerStyle={{alignItems: 'center'}}
        enableOnAndroid>
        <Block>
          <Header
            back
            noPhoto
            notificationsNumber={10}
            notificationIconContainerStyle={
              styles.notificationIconContainerStyle
            }
          />

          <View style={[styles.screenNameContainer]}>
            <CustomText text={'edit my info'} textStyle={[styles.screenName]} />
          </View>

          <View style={[styles.photoContainer]}>
            <PhotoRecangle
              pickIcon
              containerStyle={{width: '50%', height: '80%'}}
              /* onAvatarPressed={() => console.log('a')} */
              pickText={'Change photo'}
            />
          </View>

          <View style={[styles.inputsContainer]}>
            <LoginInput
              label={'username'}
              containerStyle={{marginVertical: 20}}
            />
            <CustomButton />
          </View>
        </Block>
      </KeyboardAwareScrollView>
    </View>
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
