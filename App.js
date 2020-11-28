/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  I18nManager,
} from 'react-native';
import {ThemeProvider} from 'react-native-paper';
import {ReportHeader, StepNumber} from './src/Components';
import RNBootSplash from 'react-native-bootsplash';
import CommentInput from './src/Components/CommentInput';

const App: () => React$Node = () => {
  useEffect(() => {
    I18nManager.forceRTL(false);
    const splash = setTimeout(() => {
      RNBootSplash.hide({fade: true});
    }, 1000);
    return () => {
      clearTimeout(splash);
    };
  }, []);
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#fff'} />
      <SafeAreaView style={styles.saveArea}>
        <CommentInput />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  saveArea: {
    flex: 1,
  },
});

export default App;
