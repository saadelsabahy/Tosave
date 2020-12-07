import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
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

const WelcomeScreen = ({navigation}) => {
  const onPhotoPressed = () => {
    navigation.openDrawer();
  };

  const onWelcomeItemPressed = ({category, description, icon}) => {
    navigation.navigate(
      category.toLowerCase().trim() == 'hse'
        ? 'WelcomeDashboard'
        : 'DashboardCategory',
      {category, description, icon},
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
          <CustomText text={'welcome !'} textStyle={[styles.welcome]} />
          <TextContainer text={'Engineer Doaa'} />
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
            renderItem={({item: {icon, category, description}, index}) => {
              return (
                <WelcomeScreenItem
                  SvgIcon={icon}
                  description={description}
                  title={category}
                  onItemPressed={() =>
                    onWelcomeItemPressed({category, description, icon})
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
  },
  welcome: {
    fontSize: FONT_25,
    fontWeight: 'bold',
    fontStyle: 'normal',
    lineHeight: 30,
    color: '#263231',
  },
});
