/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
/* eslint-disable prettier/prettier */

import React, { useEffect } from 'react';
import { StyleSheet, StatusBar, I18nManager, SafeAreaView } from 'react-native';
import { WHITE_COLOR } from './src/constants/design/colorsAndSizes';
import './src/localization';
import AuthContext from './src/navigation/AuthContext';
import AppNavigation from './src/navigation';
import LanguageSheetProvider from './src/context/LanguageSheetProvider';
import { Provider as PaperProvider } from 'react-native-paper';
import { enableScreens } from 'react-native-screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ApolloProvider } from '@apollo/client';
import GetClient from './src/graphql/client';


enableScreens();
const App = () => {
  const [signature, setsignature] = React.useState(null);
  const signatureRef = React.useRef();
  useEffect(() => {
    I18nManager.forceRTL(false);

    return () => { };
  }, []);

  return (
    <SafeAreaProvider style={styles.saveArea}>
      <StatusBar barStyle="dark-content" backgroundColor={'#fff'} />
      <PaperProvider>
        <ApolloProvider client={GetClient('')}>
          <AuthContext>
            <LanguageSheetProvider>
              <AppNavigation />
            </LanguageSheetProvider>
          </AuthContext>
        </ApolloProvider>
      </PaperProvider>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  saveArea: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
  },
});

export default App;
