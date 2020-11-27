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
import {Header, LoginInput, Segment} from './src/Components';
import CustomButton from './src/Components/CustomButton';
import RNBootSplash from 'react-native-bootsplash';
import WelcomeScreenItem from './src/Components/WelcomeScreenItem';
import {
  AwarnessIcon,
  CorrectIcon,
  EvacuationIcon,
  IncidentIcon,
  MaintenanceIcon,
  MonthlyCalendar,
  RisksIcon,
  TrainingIcon,
} from './src/Svgs';
import HsaCard from './src/Components/HsaCard';
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
        <ThemeProvider>
          <HsaCard ItemIcon={<MonthlyCalendar />} />
          <Segment values={['one', 'two']} selectedIndex={0} />
          <Header />
        </ThemeProvider>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  saveArea: {
    flex: 1,
    width: '97%',
    backgroundColor: '#fff',
    alignItems: 'center',
    alignSelf: 'center',
  },
});

export default App;
