/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import HsaDashboardIcon from './src/Svgs/HsaDashboardIcon';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.saveArea}>
        <HsaDashboardIcon />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  saveArea: {
    flex: 1,
    backgroundColor: 'green',
  },
});

export default App;
