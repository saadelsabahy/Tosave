import React from 'react';
import {FlatList, I18nManager, StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import {CustomText, Header, WelcomeDashboardListItem} from '../../Components';
import {
  FONT_18,
  FONT_25,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  WHITE_COLOR,
} from '../../constants/design/colorsAndSizes';
import {DASHBOARD_DATA} from '../../constants/design/MockData';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
const WelcomeDashboard = ({navigation, route}) => {
  const insets = useSafeAreaInsets();
  const {category, category_ar, description} = route.params;
  const CATEGORY = I18nManager.isRTL ? category_ar : category;
  const goBack = () => {
    navigation.goBack();
  };
  const onItemPressed = ({category, category_ar, icon, id}) => {
    console.log({category});
    navigation.navigate('DashboardCategory', {category, category_ar, icon, id});
  };
  return (
    <View
      style={[styles.container, {paddingBottom: Math.max(insets.bottom, 16)}]}>
      {/* <Button onPress={() => navigation.goBack()}>go to back</Button> */}
      <View style={[styles.contentContainer]}>
        <Header back goBack={goBack} notificationsNumber={10} />
        {/* header text */}
        <View style={[styles.textContainer]}>
          <CustomText text={CATEGORY} textStyle={styles.category} />
          <CustomText text={description} textStyle={styles.description} />
        </View>
        {/* list */}
        <View style={styles.listContainer}>
          <FlatList
            data={DASHBOARD_DATA}
            contentContainerStyle={{
              justifyContent: 'space-evenly',
              flexGrow: 1,
            }}
            numColumns={2}
            keyExtractor={(item, index) => `${item.id}`}
            renderItem={({item: {icon, category, category_ar, id}, index}) => {
              const CATEGORY = I18nManager.isRTL ? category_ar : category;
              return (
                <WelcomeDashboardListItem
                  ItemIcon={icon}
                  itemName={CATEGORY}
                  onItemPressed={() =>
                    onItemPressed({category, category_ar, icon, id})
                  }
                  delay={index * 500}
                />
              );
            }}
          />
        </View>
      </View>
    </View>
  );
};

export {WelcomeDashboard};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: WHITE_COLOR,
  },
  contentContainer: {
    width: SCREEN_WIDTH * 0.95,
    height: '100%',
  },
  textContainer: {
    width: '90%',
    height: SCREEN_HEIGHT / 10,
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    alignItems: 'flex-start',
  },
  listContainer: {
    flex: 1,
  },
  category: {
    fontSize: FONT_25,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#263231',
    textTransform: 'uppercase',
  },
  description: {
    fontSize: FONT_18,
    fontWeight: '600',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#6c6c6c',
  },
});
