import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Button} from 'react-native-paper';
import Animated from 'react-native-reanimated';
import {EditProfile} from '../../Screens';
import {createStackNavigator} from '@react-navigation/stack';
import CustomDrawer from './CustomDrawer';
import {WHITE_COLOR} from '../../constants/design/colorsAndSizes';
import WelcomeStackNavigation from '../WelcomeScreenStack';
// const AnimatedView = Animated.createAnimatedComponent(View);
const Stack = createStackNavigator();

function DrawerStack({navigation, style}) {
  return (
    <Animated.View style={StyleSheet.flatten([styles.stack, style])}>
      <Stack.Navigator
        initialRouteName={'WelcomeStack'}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="WelcomeStack" component={WelcomeStackNavigation} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
      </Stack.Navigator>
    </Animated.View>
  );
}

const MainDrawer = createDrawerNavigator();
const Drawer = () => {
  const [progressing, setprogressing] = useState(new Animated.Value(0));
  const scale = Animated.interpolate(progressing, {
    inputRange: [0, 1],
    outputRange: [1, 0.92],
  });

  const borderRadius = Animated.interpolate(progressing, {
    inputRange: [0, 1],
    outputRange: [0, 50],
  });
  const screenStyle = {borderRadius, transform: [{scale}]};
  const updatProgressing = (progress) => {
    setprogressing(progress);
  };
  return (
    <MainDrawer.Navigator
      initialRouteName="DrawerStack"
      drawerType="slide"
      overlayColor="transparent"
      contentContainerStyle={{flex: 1}}
      drawerContentOptions={{
        activeBackgroundColor: WHITE_COLOR,
        activeTintColor: WHITE_COLOR,
        inactiveTintColor: WHITE_COLOR,
      }}
      drawerStyle={{width: '60%'}}
      sceneContainerStyle={{backgroundColor: 'transparent'}}
      drawerContent={(props) => {
        updatProgressing(props.progress);
        /* setprogressing(props.progress); */
        return <CustomDrawer {...props} />;
      }}>
      <MainDrawer.Screen name="DrawerStack">
        {(props) => <DrawerStack {...props} style={screenStyle} />}
      </MainDrawer.Screen>
      <MainDrawer.Screen name="EditProfile" component={EditProfile} />
    </MainDrawer.Navigator>
  );
};
const styles = StyleSheet.create({
  stack: {
    flex: 1,
    shadowColor: WHITE_COLOR,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 10,
  },
});
export default Drawer;
