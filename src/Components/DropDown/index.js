import React from 'react';
import {StyleSheet, Text, View, Pressable, FlatList} from 'react-native';
import {Button, Menu, Divider, Provider, IconButton} from 'react-native-paper';
import {
  FONT_13,
  FONT_18,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from '../../constants/design/colorsAndSizes';
import {DropdownArrow} from '../../Svgs';
import {CustomText} from '../customText';
const CustomDropdown = ({
  visible,
  openMenu,
  closeMenu,
  data,
  selectedText,
  title,
  onSelectItem,
}) => {
  return (
    <Provider>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        style={{width: '95%', alignSelf: 'center', paddingHorizontal: 0}}
        anchor={
          <Pressable style={[styles.container]} onPress={openMenu}>
            <View style={{width: '90%', justifyContent: 'center'}}>
              <CustomText text={title} textStyle={[styles.title]} />
              <View style={[styles.selectedItemAndArrowRow]}>
                <CustomText
                  text={selectedText}
                  textStyle={[styles.selectedItemText]}
                />
                <DropdownArrow />
              </View>
            </View>
          </Pressable>
        }>
        <FlatList
          style={{maxHeight: 150}}
          persistentScrollbar
          //  ItemSeparatorComponent={() => <Divider style={{ marginLeft: 16 }} />}
          data={data}
          renderItem={({item, index}) => {
            return (
              <Pressable
                onPress={() => {
                  onSelectItem(item);
                }}
                style={({pressed}) => [
                  {
                    backgroundColor: pressed ? '#ddd' : 'transparent',
                    height: SCREEN_HEIGHT / 19,
                    width: '100%',
                    paddingHorizontal: 10,
                    justifyContent: 'center',
                  },
                ]}>
                <CustomText text={item} />
              </Pressable>
            );
          }}
          keyExtractor={(item, index) => `${index}`}
        />
      </Menu>
    </Provider>
  );
};

export {CustomDropdown};

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    height: 65,
    borderRadius: 20,
    backgroundColor: '#f3f3f3',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  selectedItemAndArrowRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: FONT_13 + 1,
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 18,
    letterSpacing: 0,
    color: '#a0a0a0',
  },
  selectedItemText: {
    fontFamily: 'Montserrat',
    fontSize: FONT_18,
    fontWeight: 'bold',
    fontStyle: 'normal',
    lineHeight: 22,
    letterSpacing: 0,
    color: '#263231',
  },
});
