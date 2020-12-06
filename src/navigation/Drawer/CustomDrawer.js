import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Button, Text} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import Feather from 'react-native-vector-icons/Feather';

function CustomDrawer(props) {
  return (
    <DrawerContentScrollView
      {...props}
      scrollEnabled={false}
      contentContainerStyle={{flex: 1}}>
      <DrawerItem
        label="Edit profile"
        onPress={() => props.navigation.navigate('EditProfile')}
        icon={() => (
          <Feather name="home" size={25} style={{marginHorizontal: 10}} />
        )}
      />
      {/* <DrawerItem
        label="Contacts"
        onPress={() => props.navigation.navigate('Contacts')}
        icon={() => (
          <Feather name="menu" size={25} style={{marginHorizontal: 10}} />
        )}
      />
      <DrawerItem
        label="Notifications"
        onPress={() => props.navigation.navigate('Notifications')}
        icon={() => (
          <AntDesign name="contacts" size={25} style={{marginHorizontal: 10}} />
        )}
      /> */}
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  stack: {
    flex: 1,
    overflow: 'hidden',
  },
});

export default CustomDrawer;
