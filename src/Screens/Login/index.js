import React, {
  useRef,
  useState,
  useCallback,
  useMemo,
  useEffect,
  useContext,
} from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  CustomText,
  LoginInput,
  Handle,
  CustomButton,
  LanguageSheet,
  CustomBottomSheet,
} from '../../Components';
import {
  calcFont,
  calcHeight,
  calcWidth,
  FONT_37,
  GREEN50,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  WHITE_COLOR,
  EYE_ICON_COLOR,
} from '../../constants/design/colorsAndSizes';
import {BackgroundRects, LoginPhoto, LoginWorldIcon, Logo} from '../../Svgs';
import {useTranslation} from 'react-i18next';
import {TextInput} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AuthenticationContext} from '../../navigation/AuthContext';
import {LanguageSheetContext} from '../../context/LanguageSheetProvider';

const Login = () => {
  const {authContext, state} = useContext(AuthenticationContext);
  const passwordInputRef = useRef();
  const bottomSheetRef = useRef(null);
  const [secureInput, setsecureInput] = useState(true);
  const [selectedLanguage, setselectedLanguage] = useState('en');
  const {t, i18n} = useTranslation();
  const {languageModalRef} = useContext(LanguageSheetContext);

  //toggleSecureInput
  const toggleSecureInput = () => {
    passwordInputRef.current.focus();
    setsecureInput(!secureInput);
  };

  //login
  const onLoginPressed = () => {
    authContext.signIn({userToken: 'fakeToken'});
  };
  return (
    <View style={[styles.container]}>
      <View style={styles.backgroundRectsContainer}>
        <BackgroundRects />
      </View>
      <KeyboardAwareScrollView
        style={[styles.keyboardAwareScrollView]}
        enableOnAndroid
        extraScrollHeight={50}
        extraHeight={0}
        stickyHeaderIndices={[1]}
        keyboardShouldPersistTaps={'handled'}
        showsVerticalScrollIndicator={false}>
        <View style={[styles.topContainer]}>
          <Pressable
            style={styles.worldIconContainer}
            onPress={() => languageModalRef.current?.open()}>
            <LoginWorldIcon />
          </Pressable>
          <Logo />
          <LoginPhoto />
        </View>
        <View style={[styles.bottomContainer]}>
          <CustomText text={t('login')} textStyle={[styles.text]} />
          <View style={[styles.inputsAndButtonContainer]}>
            <LoginInput
              onSubmitEditing={() => passwordInputRef.current?.focus()}
              returnKeyType={'next'}
              label={t('username')}
              // errorText={'hello'}
            />
            <LoginInput
              referance={passwordInputRef}
              label={t('password')}
              secureTextEntry={secureInput}
              // errorText={'hello'}
              right={
                <TextInput.Icon
                  onPress={toggleSecureInput}
                  size={calcFont(20)}
                  color={EYE_ICON_COLOR}
                  name={secureInput ? 'eye-outline' : 'eye-off-outline'}
                />
              }
            />
            <CustomButton
              buttonText={t('login')}
              containerStyle={styles.button}
              onPress={onLoginPressed}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export {Login};

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    backgroundColor: WHITE_COLOR,
    alignItems: 'center',
  },
  backgroundRectsContainer: {
    position: 'absolute',
    end: '-10%',
    height: SCREEN_HEIGHT / 3.5,
    overflow: 'hidden',
  },
  keyboardAwareScrollView: {
    width: SCREEN_WIDTH - 20,
    height: SCREEN_HEIGHT,
  },
  topContainer: {
    width: '100%',
    height: SCREEN_HEIGHT / 2,
    justifyContent: 'space-evenly',
    //paddingBottom: 20,
  },
  worldIconContainer: {
    width: calcWidth(45),
    height: calcHeight(45),
    borderRadius: calcFont(9),
    backgroundColor: GREEN50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    width: '100%',
    height: SCREEN_HEIGHT / 2,
    justifyContent: 'space-around',
  },
  text: {
    fontSize: FONT_37,
    fontWeight: 'bold',
    color: '#263231',
    textTransform: 'uppercase',
  },
  inputsAndButtonContainer: {
    flex: 0.85,
    width: '100%',
    //  height:SCREEN_HEIGHT*.9,
    justifyContent: 'space-evenly',
  },
});
