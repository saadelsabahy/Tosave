import React, {useContext, useEffect} from 'react';
import {View, Text, ActivityIndicator, I18nManager} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Drawer from './Drawer';
import RootStackScreen from './RootStack';
import RNBootSplash from 'react-native-bootsplash';
import {AuthenticationContext} from './AuthContext';
import {GREEN100, WHITE_COLOR} from '../constants/design/colorsAndSizes';
import {Login} from '../Screens';

const AppNavigation = () => {
  const {authContext, state} = useContext(AuthenticationContext);

  useEffect(() => {
    authContext.restoreToken(RNBootSplash.hide({fade: true}));
    return () => {};
  }, []);

  if (state.isLoading) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: WHITE_COLOR,
        }}>
        <ActivityIndicator color={GREEN100} size={'large'} animating />
      </View>
    );
  }
  return (
    <NavigationContainer>
      {state.userToken ? <Drawer /> : <Login />}
    </NavigationContainer>
  );
};

export default AppNavigation;
