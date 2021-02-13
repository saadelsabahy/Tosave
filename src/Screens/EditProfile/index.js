import React, {useState, useContext} from 'react';
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
import {useForm, Controller} from 'react-hook-form';
import validation from '../../utils/validation';
import ImagePicker from 'react-native-image-crop-picker';
import {AuthenticationContext} from '../../navigation/AuthContext';
import {useMutation} from '@apollo/client';
import {UPDATE_USER} from '../../constants/api/Graphql/Mutation';
import {uploadImages} from '../../constants/uploadImages';
const defaultValues = {
  newName: '',
};
const EditProfile = ({navigation}) => {
  const [newAvatar, setnewAvatar] = useState({});
  const {t} = useTranslation();
  const {
    state: {userId},
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
  const [updateUser, {data, loading}] = useMutation(UPDATE_USER);
  const goBack = () => {
    navigation.goBack();
  };
  const onChangeInfoPressed = ({newName}) => {
    /* updateUser({variables: {id, type: input.value}}); */
    uploadImages([newAvatar], (avatar) =>
      updateUser({variables: {id: userId, name: newName, avatar: avatar[0]}}),
    );
  };
  const onChangeAvatarPressed = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      mediaType: 'photo',
    })
      .then((images) => {
        console.log(images);
        setnewAvatar(images);
      })
      .catch((e) => console.log('select profile avatar error', e));
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
              onAvatarPressed={onChangeAvatarPressed}
              pickText={t('editInfo:changePhoto')}
              uri={newAvatar.path || ''}
            />
          </View>

          <View style={[styles.inputsContainer]}>
            <Controller
              control={control}
              render={({onChange, onBlur, value}) => (
                <LoginInput
                  label={t('login:userName')}
                  errorText={errors?.newName?.message}
                  error={errors.newName}
                  onChangeText={(value) => onChange(value)}
                  onBlur={onBlur}
                  value={value}
                  containerStyle={{marginVertical: 20}}
                />
              )}
              name="newName"
              rules={validation(t)['name']}
            />

            <CustomButton
              buttonText={t('editInfo:saveChanges')}
              onPress={handleSubmit(onChangeInfoPressed)}
            />
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
