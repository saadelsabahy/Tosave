import React, {useContext} from 'react';
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
import {Controller, useForm} from 'react-hook-form';
import validation from '../../utils/validation';
import {useMutation} from 'react-query';
import {endPoints} from '../../constants/api/Auth';
import {AuthenticationContext} from '../../navigation/AuthContext';
import {useAxios} from '../../hooks';

const defaultValues = {
  oldPassword: '',
  newPassword: '',
};
const ChangePassword = ({navigation}) => {
  const {t} = useTranslation();
  const Axios = useAxios();
  const {
    state: {userName},
  } = useContext(AuthenticationContext);
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
  const goBack = () => {
    navigation.goBack();
  };
  const {isLoading, mutate, data, isError} = useMutation(
    ({oldPassword, newPassword}) =>
      Axios.post(endPoints.CHANGE_PASSWORD, {
        password: oldPassword,
        confirmPassword: newPassword,
        username: userName,
      }),
    {onSuccess: (data) => onChangePasswordSuccess(data)},
  );
  //login
  const onChangePasswordPressed = (data) => {
    mutate(data);
  };
  const onChangePasswordSuccess = ({data}) => {
    /* authContext.signIn({
      userToken: data.token,
      userName: data.display_name,
      userType: data.user_type,
    }); */
    reset();
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
            <Controller
              control={control}
              render={({onChange, onBlur, value}) => (
                <LoginInput
                  label={t('login:oldPassword')}
                  containerStyle={{marginBottom: 10}}
                  errorText={errors?.oldPassword?.message}
                  error={errors.oldPassword}
                  onChangeText={(value) => onChange(value)}
                  onBlur={onBlur}
                  value={value}
                />
              )}
              name="oldPassword"
              rules={validation(t)['password']}
            />
            <Controller
              control={control}
              render={({onChange, onBlur, value}) => (
                <LoginInput
                  label={t('login:newPassword')}
                  containerStyle={{marginBottom: 20}}
                  errorText={errors?.newPassword?.message}
                  error={errors.newPassword}
                  onChangeText={(value) => onChange(value)}
                  onBlur={onBlur}
                  value={value}
                />
              )}
              name="newPassword"
              rules={validation(t)['password']}
            />

            <CustomButton
              buttonText={t('editInfo:saveChanges')}
              onPress={handleSubmit(onChangePasswordPressed)}
              loading={isLoading}
            />
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
