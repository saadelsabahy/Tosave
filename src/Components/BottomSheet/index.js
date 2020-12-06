import React, {useMemo, useRef, useCallback} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  WHITE_COLOR,
  GREEN50,
  calcFont,
  calcWidth,
  calcHeight,
} from '../../constants/design/colorsAndSizes';
import {Modalize} from 'react-native-modalize';
import {BottomSheetContainer} from '../BottomSheetBlock';
import {LanguageSheet} from '../LanguageBottomSheet';
const CustomBottomSheet = ({children, snapPoints, referance}) => {
  return (
    <Modalize
      ref={referance}
      handlePosition="outside"
      useNativeDriver={true}
      modalStyle={[styles.modal]}
      disableScrollIfPossible={false}
      handleStyle={[styles.handle]}
      modalHeight={snapPoints || SCREEN_HEIGHT / 1.9}
      threshold={20}
      overlayStyle={{backgroundColor: 'rgba(0, 0, 0, 0.4)'}}>
      {children}
    </Modalize>
  );
};

export {CustomBottomSheet};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    width: SCREEN_WIDTH,
    backgroundColor: WHITE_COLOR,
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 11,
    shadowOpacity: 1,
    borderTopStartRadius: calcFont(40),
    borderTopEndRadius: calcFont(40),
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#ddd',
    // overflow: 'hidden',
  },
  handle: {
    width: calcWidth(68),
    height: calcHeight(6),
    borderRadius: calcFont(3),
    backgroundColor: WHITE_COLOR,
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 11,
    shadowOpacity: 1,
    alignSelf: 'center',
    marginBottom: 0,
  },
});
