/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}
import React, {useEffect} from 'react';
import {StyleSheet, StatusBar, I18nManager, SafeAreaView} from 'react-native';
import {WHITE_COLOR} from './src/constants/design/colorsAndSizes';
import './src/localization';
import AuthContext from './src/navigation/AuthContext';
import AppNavigation from './src/navigation';
import LanguageSheetProvider from './src/context/LanguageSheetProvider';
import {Provider as PaperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {I18nextProvider} from 'react-i18next';
import i18next from './src/localization';
import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();
const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#fff'} />
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider style={styles.saveArea}>
          <I18nextProvider i18n={i18next}>
            <PaperProvider>
              <AuthContext>
                <LanguageSheetProvider>
                  <AppNavigation />
                </LanguageSheetProvider>
              </AuthContext>
            </PaperProvider>
          </I18nextProvider>
        </SafeAreaProvider>
      </QueryClientProvider>
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
