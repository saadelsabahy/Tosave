import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {FONT_16, GREEN100} from '../../constants/design/colorsAndSizes';
import {DeleteIconWithBg, EmployeeIcon} from '../../Svgs';
import {CustomCheckBox} from '../CheckBox';
import {CustomText} from '../customText';

const UserSection = ({
  name,
  photo,
  id,
  deleteIcon,
  onIconPressed,
  checkBox,
  checkValue,
  onCheckChange,
}) => {
  return (
    <View style={[styles.container]}>
      <View style={[styles.startContainer]}>
        <EmployeeIcon />
        <View style={[styles.infoContainer]}>
          <CustomText text={'user name'} textStyle={[styles.name]} />
          <View style={[{flexDirection: 'row'}]}>
            <CustomText text={'id'} textStyle={[styles.idText]} />
            <CustomText text={'123'} textStyle={[styles.idNumber]} />
          </View>
        </View>
      </View>
      {deleteIcon && (
        <Pressable
          onPress={onIconPressed}
          style={({pressed}) => [{opacity: pressed ? 0.7 : 1}]}>
          <DeleteIconWithBg />
        </Pressable>
      )}
      {checkBox && (
        <CustomCheckBox checked={checkValue} onChange={onCheckChange} />
      )}
    </View>
  );
};

export {UserSection};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ddd',
    alignItems: 'center',
  },
  startContainer: {
    flexDirection: 'row',
  },
  infoContainer: {
    marginStart: 10,
  },
  name: {
    fontSize: FONT_16 + 1,
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: '#263231',
  },
  idText: {
    fontSize: FONT_16 + 1,
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: '#afafaf',
    textTransform: 'uppercase',
    marginEnd: 8,
  },
  idNumber: {
    fontSize: FONT_16 + 1,
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: GREEN100,
  },
});
