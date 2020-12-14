import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Button} from 'react-native-paper';
import Animated from 'react-native-reanimated';
import {ChangePassword, CreateReport, EditProfile} from '../../Screens';
import {createStackNavigator} from '@react-navigation/stack';
import CustomDrawer from './CustomDrawer';
import {WHITE_COLOR} from '../../constants/design/colorsAndSizes';
import WelcomeStackNavigation from '../WelcomeScreenStack';
import {SafeAreaView} from 'react-native-safe-area-context';
const AnimatedSafeAreaView = Animated.createAnimatedComponent(SafeAreaView);
const Stack = createStackNavigator();

const DrawerStack = ({navigation, style, ...props}) => {
  return (
    <Animated.View style={[styles.stack, style]}>
      <Stack.Navigator
        initialRouteName={'WelcomeStack'}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="WelcomeStack" component={WelcomeStackNavigation} />
      </Stack.Navigator>
    </Animated.View>
  );
};

const MainDrawer = createDrawerNavigator();

const Drawer = () => {
  const [progressing, setprogressing] = useState(new Animated.Value(0));
  const scale = Animated.interpolate(progressing, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });

  const borderRadius = Animated.interpolate(progressing, {
    inputRange: [0, 1],
    outputRange: [0, 20],
  });
  const screenStyle = {borderRadius, transform: [{scale}]};

  return (
    <MainDrawer.Navigator
      initialRouteName="WelcomeStack"
      drawerType="slide"
      overlayColor="transparent"
      drawerStyle={{width: '60%'}}
      sceneContainerStyle={{backgroundColor: 'transparent'}}
      drawerContent={(props) => {
        setprogressing(props.progress);
        return <CustomDrawer {...props} />;
      }}>
      <MainDrawer.Screen name="DrawerStack">
        {(props) => <DrawerStack {...props} style={screenStyle} />}
      </MainDrawer.Screen>
      <MainDrawer.Screen name="EditProfile" component={EditProfile} />
      <MainDrawer.Screen name="ChangePassword" component={ChangePassword} />
    </MainDrawer.Navigator>
  );
};
const styles = StyleSheet.create({
  stack: {
    flex: 1,
    shadowColor: 'rgba(0,0,0,.5)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10,
    elevation: 5,
  },
});
export default Drawer;
