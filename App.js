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
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  split,
} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import {WebSocketLink} from '@apollo/client/link/ws';
import reactotron from 'reactotron-react-native';
import {getMainDefinition} from '@apollo/client/utilities';

const httpLink = new HttpLink({
  uri: 'http://tosafe.trendsgcc.com/v1/graphql',
  headers: {
    'x-hasura-admin-secret': 'tosafe#5@2021',
  },
});

const wsLink = new WebSocketLink({
  uri: 'http://tosafe.trendsgcc.com/v1/graphql',
  options: {
    reconnect: true,
    connectionParams: {
      headers: {
        'x-hasura-admin-secret': 'tosafe#5@2021',
      },
    },
  },
});

const splitLink = split(
  ({query}) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const appolloClient = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
  headers: {'x-hasura-admin-secret': 'tosafe#5@2021'},
});
const queryClient = new QueryClient();

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#fff'} />
      <QueryClientProvider client={queryClient}>
        <ApolloProvider client={appolloClient}>
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
        </ApolloProvider>
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
