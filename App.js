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
import {
  ReportHeader,
  StepNumber,
  ImageGrid,
  CustomBottomSheet,
  CustomDropdown,
  CalendarPickerRange,
  CustomCheckBox,
} from './src/Components';
import RNBootSplash from 'react-native-bootsplash';
import CommentInput from './src/Components/CommentInput';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {
  ChangePasswordLock,
  CheckedSvg,
  HsaDashboardIcon,
  UnChecked,
  UnCheckedSvg,
} from './src/Svgs';
import WelcomeScreenItem from './src/Components/WelcomeScreenItem';
import HsaCard from './src/Components/HseCard';
const App: () => React$Node = () => {
  const [check, setcheck] = React.useState(false);
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
      <BottomSheetModalProvider>
        <SafeAreaView style={styles.saveArea}>
          {/*    <ImageGrid
          images={[
            'https://facebook.github.io/react-native/docs/assets/favicon.png',
            'https://facebook.github.io/react-native/docs/assets/favicon.png',
            'https://facebook.github.io/react-native/docs/assets/favicon.png',
            
          ]}
        /> */}
          <CalendarPickerRange />
          <CustomCheckBox
            onChange={(newValue) => {
              setcheck(!check);
              console.log({newValue});
            }}
            checked={check}
          />
        </SafeAreaView>
      </BottomSheetModalProvider>
    </>
  );
};

const styles = StyleSheet.create({
  saveArea: {
    flex: 1,
  },
});

export default App;
