import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import {AddIcon} from '../../Svgs';

const CreateMonthlyReportIcon = ({...props}) => {
  return (
    <Pressable
      style={({pressed}) => [
        styles.addIconContainer,
        {opacity: pressed ? 0.7 : 1},
      ]}
      {...props}>
      <AddIcon />
    </Pressable>
  );
};

export {CreateMonthlyReportIcon};

const styles = StyleSheet.create({
  addIconContainer: {
    position: 'absolute',
    end: 5,
    bottom: 5,
  },
});
