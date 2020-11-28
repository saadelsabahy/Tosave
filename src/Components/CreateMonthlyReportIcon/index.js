import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import {AddIcon} from '../../Svgs';

const CreateMonthlyReportIcon = () => {
  return (
    <Pressable
      onPress={() => {
        console.log('press create');
      }}
      style={({pressed}) => [
        styles.addIconContainer,
        {opacity: pressed ? 0.7 : 1},
      ]}>
      <AddIcon />
    </Pressable>
  );
};

export {CreateMonthlyReportIcon};

const styles = StyleSheet.create({
  addIconContainer: {
    position: 'absolute',
    end: 10,
    bottom: 10,
  },
});
