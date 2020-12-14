/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {StyleSheet, StatusBar, I18nManager, SafeAreaView} from 'react-native';
import {WHITE_COLOR} from './src/constants/design/colorsAndSizes';
import './src/localization';
import AuthContext from './src/navigation/AuthContext';
import AppNavigation from './src/navigation';
import LanguageSheetProvider from './src/context/LanguageSheetProvider';
import {Provider as PaperProvider} from 'react-native-paper';
import {enableScreens} from 'react-native-screens';
import {SafeAreaProvider} from 'react-native-safe-area-context';
enableScreens();
const App: () => React$Node = () => {
  const [signature, setsignature] = React.useState(null);
  const signatureRef = React.useRef();
  useEffect(() => {
    I18nManager.forceRTL(false);

    return () => {};
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#fff'} />

      <SafeAreaProvider style={styles.saveArea}>
        <PaperProvider>
          <AuthContext>
            <LanguageSheetProvider>
              <AppNavigation />
            </LanguageSheetProvider>
          </AuthContext>
        </PaperProvider>
      </SafeAreaProvider>
    </>
  );
};

const styles = StyleSheet.create({
  saveArea: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
  },
});

export default App;
