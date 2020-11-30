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
} from './src/Components';
import RNBootSplash from 'react-native-bootsplash';
import CommentInput from './src/Components/CommentInput';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {ChangePasswordLock} from './src/Svgs';
const App: () => React$Node = () => {
  const botRef = React.useRef(null);
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
          <CustomBottomSheet ref={botRef.current} />
          <ChangePasswordLock />
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
