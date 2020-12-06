import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';

const WelcomeDashboard = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button onPress={() => navigation.goBack()}>go to back</Button>
    </View>
  );
};

export {WelcomeDashboard};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
