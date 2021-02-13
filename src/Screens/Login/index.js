import React, {useRef, useState, useContext} from 'react';
import {StyleSheet, View, Pressable} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {CustomText, LoginInput, CustomButton} from '../../Components';
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
import {AuthenticationContext} from '../../navigation/AuthContext';
import {LanguageSheetContext} from '../../context/LanguageSheetProvider';
import {useForm, Controller} from 'react-hook-form';
import validation from '../../utils/validation';
import {useMutation} from 'react-query';
import {useAxios} from '../../hooks';
import {endPoints} from '../../constants/api/Auth';
import reactotron from 'reactotron-react-native';
const defaultValues = {
  username: '',
  password: '',
};
const Login = () => {
  const {authContext} = useContext(AuthenticationContext);
  const Axios = useAxios();
  const passwordInputRef = useRef();
  const [secureInput, setsecureInput] = useState(true);
  const {t} = useTranslation();
  const {languageModalRef} = useContext(LanguageSheetContext);
  const {handleSubmit, errors, reset, control} = useForm({
    mode: 'all',
    reValidateMode: 'onBlur',
    defaultValues,
    resolver: undefined,
    context: undefined,
    criteriaMode: 'firstError',
    shouldFocusError: true,
    shouldUnregister: true,
  });
  //toggleSecureInput
  const toggleSecureInput = () => {
    passwordInputRef.current.focus();
    setsecureInput(!secureInput);
  };
  const {isLoading, mutate, data, isError} = useMutation(
    (userData) => Axios.post(endPoints.LOGIN, userData),
    {onSuccess: (data) => onSignInSuccess(data)},
  );
  //login
  const onLoginPressed = async (data) => {
    mutate(data);
  };
  const onSignInSuccess = ({data}) => {
    authContext.signIn({
      userToken: data.token,
      userName: data.display_name,
      userType: data.user_type,
      userId: data.id,
    });
    reset();
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
          <CustomText text={t('login:login')} textStyle={[styles.text]} />
          <View style={[styles.inputsAndButtonContainer]}>
            <Controller
              control={control}
              render={({onChange, onBlur, value}) => (
                <LoginInput
                  onSubmitEditing={() => passwordInputRef.current?.focus()}
                  returnKeyType={'next'}
                  label={t('login:userName')}
                  errorText={errors?.username?.message}
                  error={errors.username}
                  onChangeText={(value) => onChange(value)}
                  onBlur={onBlur}
                  value={value}
                />
              )}
              name="username"
              rules={validation(t)['name']}
            />
            <Controller
              control={control}
              render={({onChange, onBlur, value}) => (
                <LoginInput
                  errorText={errors?.password?.message}
                  error={errors.password}
                  onChangeText={(value) => onChange(value)}
                  onBlur={onBlur}
                  value={value}
                  referance={passwordInputRef}
                  label={t('login:password')}
                  secureTextEntry={secureInput}
                  /* inputStyle={{start: I18nManager.isRTL ? -calcFont(17) : 0}} */
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
              )}
              name="password"
              rules={validation(t)['password']}
            />

            <CustomButton
              buttonText={t('login:login')}
              containerStyle={styles.button}
              onPress={handleSubmit(onLoginPressed)}
              loading={isLoading}
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
    flexGrow: 1,
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
