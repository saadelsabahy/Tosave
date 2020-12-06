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
  TouchableOpacity,
  Image,
  Pressable,
} from 'react-native';
import {ThemeProvider} from 'react-native-paper';
import {MonthlyReportCard, CustomSignature, CustomText} from './src/Components';
import RNBootSplash from 'react-native-bootsplash';
import CommentInput from './src/Components/CommentInput';
import {
  ChangePasswordLock,
  CheckedSvg,
  HsaDashboardIcon,
  LoginWorldIcon,
  UnChecked,
  UnCheckedSvg,
} from './src/Svgs';
import {
  calcFont,
  calcHeight,
  calcWidth,
  GREEN50,
  WHITE_COLOR,
} from './src/constants/design/colorsAndSizes';
import {Login} from './src/Screens';
import './src/localization';
import AuthContext from './src/navigation/AuthContext';
import AppNavigation from './src/navigation';
const App: () => React$Node = () => {
  const [signature, setsignature] = React.useState(null);
  const signatureRef = React.useRef();
  useEffect(() => {
    I18nManager.forceRTL(false);

    return () => {};
  }, []);
  const handleOk = (signature) => {
    console.log({signature});
    setsignature(signature);
  };
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#fff'} />

      <SafeAreaView style={styles.saveArea}>
        {/* <MonthlyReportCard
            onEditPressed={() => alert('edit')}
            onDeletePressed={() => alert('delete')}
          />
          {signature && (
            <Image
              source={{uri: signature}}
              style={{width: 100, height: 100}}
            />
          )}
          <CustomSignature reference={signatureRef} handleOk={handleOk} />
          <TouchableOpacity
            onPress={() => {
              signatureRef.current.readSignature();
            }}>
            <CustomText text={'save'} />
          </TouchableOpacity> */}

        <AuthContext>
          <AppNavigation />
        </AuthContext>
      </SafeAreaView>
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
