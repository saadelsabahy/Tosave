import React, {useContext} from 'react';
import {FlatList, I18nManager, StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import {CustomText, Header, TextContainer} from '../../Components';
import WelcomeScreenItem from '../../Components/WelcomeScreenItem';
import {
  FONT_25,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  WHITE_COLOR,
} from '../../constants/design/colorsAndSizes';
import {WELCOME_DATA} from '../../constants/design/MockData';
import {useTranslation} from 'react-i18next';
import {AuthenticationContext} from '../../navigation/AuthContext';
const WelcomeScreen = ({navigation}) => {
  const {t, i18n} = useTranslation();
  const {
    state: {userName},
  } = useContext(AuthenticationContext);
  const onPhotoPressed = () => {
    navigation.openDrawer();
  };

  const onWelcomeItemPressed = ({
    category,
    category_ar,
    description,
    icon,
    id,
  }) => {
    navigation.navigate(
      category.toLowerCase().trim() == 'hse'
        ? 'WelcomeDashboard'
        : 'DashboardCategory',
      {
        category,
        category_ar,
        description,
        icon: category.toLowerCase().trim() == 'hse' ? null : icon,
        id,
      },
    );
  };

  const onNotificationsPressed = () => {
    navigation.navigate('Notifications');
  };
  return (
    <View style={styles.container}>
      <View style={[styles.contentContainer]}>
        <Header
          back={false}
          onMenuPressed={onPhotoPressed}
          onNotificationsPressed={onNotificationsPressed}
        />

        <View style={[styles.greetingContainer]}>
          <CustomText text={t('home:welcome')} textStyle={[styles.welcome]} />
          <TextContainer text={userName} />
        </View>

        <View
          style={{flex: 1, marginVertical: 10 /* backgroundColor: 'red' */}}>
          <FlatList
            data={WELCOME_DATA}
            contentContainerStyle={{
              // backgroundColor: '#ccc',
              justifyContent: 'space-evenly',
              flexGrow: 1,
            }}
            keyExtractor={(item, index) => `${item.id}`}
            renderItem={({
              item: {
                icon,
                category,
                category_ar,
                description_ar,
                description,
                id,
              },
              index,
            }) => {
              const CATEGORY = I18nManager.isRTL ? category_ar : category;
              const DESCRIPTION = I18nManager.isRTL
                ? description_ar
                : description;
              return (
                <WelcomeScreenItem
                  SvgIcon={icon}
                  delay={index * 800}
                  description={DESCRIPTION}
                  title={CATEGORY}
                  onItemPressed={() =>
                    onWelcomeItemPressed({
                      category,
                      category_ar,
                      description: DESCRIPTION,
                      icon,
                      id,
                    })
                  }
                />
              );
            }}
          />
        </View>
      </View>
    </View>
  );
};

export {WelcomeScreen};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: WHITE_COLOR,
  },
  contentContainer: {
    width: SCREEN_WIDTH * 0.95,
    height: SCREEN_HEIGHT,
  },
  greetingContainer: {
    width: '95%',
    height: SCREEN_HEIGHT / 9,
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  welcome: {
    fontSize: FONT_25,
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: '#263231',
  },
});
