/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';

import {
  HsaDashboardIcon,
  PhotoRecangle,
  Logo,
  NotificationIcon,
  AddIcon,
  EditIcon,
  DeleteIcon,
  CameraIcon,
  RepliesIcon,
} from './src/Svgs';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.saveArea}>
        <HsaDashboardIcon />
        <PhotoRecangle />
        <Logo />
        <NotificationIcon />

        <AddIcon />
        <EditIcon />
        <DeleteIcon />
        <CameraIcon />
        <RepliesIcon />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  saveArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
