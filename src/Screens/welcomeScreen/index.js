import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button onPress={() => navigation.navigate('WelcomeDashboard')}>
        go to dashboard
      </Button>
    </View>
  );
};

export {WelcomeScreen};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
