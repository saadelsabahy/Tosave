import React, {useContext, useEffect} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Drawer from './Drawer';
import RootStackScreen from './RootStack';
import RNBootSplash from 'react-native-bootsplash';
import {AuthenticationContext} from './AuthContext';
import {GREEN100, WHITE_COLOR} from '../constants/design/colorsAndSizes';
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
      {state.userToken ? <Drawer /> : <RootStackScreen />}
    </NavigationContainer>
  );
};

export default AppNavigation;
