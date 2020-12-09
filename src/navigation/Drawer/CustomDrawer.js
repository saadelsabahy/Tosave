import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  StyleSheet,
  Button,
  Text,
  I18nManager,
  Pressable,
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {useTranslation} from 'react-i18next';

import Feather from 'react-native-vector-icons/Feather';
import {
  calcFont,
  calcHeight,
  calcWidth,
  FONT_16,
  GREEN50,
  SCREEN_HEIGHT,
  RED_COLOR,
} from '../../constants/design/colorsAndSizes';
import {IconButton} from 'react-native-paper';
import PhotoRecangle from '../../Components/PhotoRecangle';
import {CustomButton, CustomText} from '../../Components';
import {EditIconWithoutBg, LoginWorldIcon} from '../../Svgs';
import {AuthenticationContext} from '../AuthContext';
import {LanguageSheetContext} from '../../context/LanguageSheetProvider';

function CustomDrawer({navigation, ...props}) {
  const {authContext} = useContext(AuthenticationContext);
  const {languageModalRef} = useContext(LanguageSheetContext);
  const {t, i18n} = useTranslation();

  //logot
  const onLogoutPressed = () => {
    navigation.closeDrawer();
    authContext.signOut();
  };
  const onChangeLanguage = () => {
    languageModalRef.current?.open();
  };
  return (
    <DrawerContentScrollView
      {...props}
      scrollEnabled={false}
      contentContainerStyle={{flex: 1}}>
      {/* header */}
      <View style={[styles.header]}>
        <IconButton
          icon="close"
          color={'#263231'}
          size={calcFont(25)}
          onPress={() => navigation.closeDrawer()}
          style={styles.closeIcon}
        />
        <View style={[styles.imageContainer]}>
          <PhotoRecangle containerStyle={styles.photo} />
          <CustomText text={'user name'} textStyle={[styles.userName]} />
        </View>
      </View>

      {/* drawer items */}

      <View style={[styles.drawerItemsContainer]}>
        {/* edit profile item */}
        <Pressable
          style={({pressed}) => [
            styles.drawerItem,
            {opacity: pressed ? 0.5 : 1},
          ]}
          onPress={() => navigation.navigate('EditProfile')}>
          <Pressable style={[styles.iconContainer]}>
            <EditIconWithoutBg style={{margin: 0, padding: 0}} />
          </Pressable>
          <CustomText text={t('editprofile')} textStyle={[styles.label]} />
        </Pressable>

        {/* edit profile item */}
        <Pressable
          style={({pressed}) => [
            styles.drawerItem,
            {opacity: pressed ? 0.5 : 1},
          ]}
          onPress={() => navigation.navigate('ChangePassword')}>
          <Pressable style={[styles.iconContainer]}>
            <EditIconWithoutBg style={{margin: 0, padding: 0}} />
          </Pressable>
          <CustomText text={t('changepassword')} textStyle={[styles.label]} />
        </Pressable>

        {/* edit profile item */}
        <Pressable
          style={({pressed}) => [
            styles.drawerItem,
            {opacity: pressed ? 0.5 : 1},
          ]}
          onPress={onChangeLanguage}>
          <Pressable style={[styles.iconContainer]}>
            <LoginWorldIcon style={{margin: 0, padding: 0}} />
          </Pressable>
          <CustomText text={t('language')} textStyle={[styles.label]} />
        </Pressable>
      </View>
      <View style={[styles.buttonContainer]}>
        <CustomButton
          color={RED_COLOR}
          containerStyle={styles.button}
          buttonText={t('logout')}
          onPress={onLogoutPressed}
        />
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  stack: {
    flex: 1,
    overflow: 'hidden',
  },
  header: {
    width: '100%',
    height: SCREEN_HEIGHT / 3,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    flex: 0.92,
    fontFamily: 'Montserrat',
    textTransform: 'capitalize',
    fontSize: FONT_16 - 1,
    writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',
    padding: 0,
    margin: 0,
    fontWeight: '600',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#263231',
    marginHorizontal: 0,
    paddingHorizontal: 0,
  },
  closeIcon: {alignSelf: 'flex-start'},
  imageContainer: {
    width: '90%',
    height: '70%',
    justifyContent: 'space-evenly',
  },
  userName: {
    fontSize: calcFont(20),
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#11a99d',
  },
  photo: {
    width: 79,
    height: 79,
    borderRadius: 22,
  },
  iconContainer: {
    width: calcWidth(45),
    height: calcHeight(45),
    borderRadius: calcFont(9),
    backgroundColor: GREEN50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawerItemsContainer: {
    width: '90%',
    height: SCREEN_HEIGHT / 2.5,
    alignSelf: 'center',
    justifyContent: 'space-evenly',
  },
  buttonContainer: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
  },
  drawerItem: {
    width: '100%',
    height: SCREEN_HEIGHT / 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  button: {
    width: '80%',
    borderTopStartRadius: 0,
    borderBottomStartRadius: 0,
  },
});

export default CustomDrawer;
