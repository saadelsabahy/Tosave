import React, {useMemo, useRef, useCallback} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import BottomSheet, {
  useBottomSheetModal,
  BottomSheetOverlay,
} from '@gorhom/bottom-sheet';
import {CustomText} from '../customText';
import {
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  WHITE_COLOR,
} from '../../constants/design/colorsAndSizes';
const CustomBottomSheet = ({
  children,
  snapPoints,
  bottomSheetRef,
  handleChange,
}) => {
  const {present} = useBottomSheetModal();
  const SNAP_POINTS = useMemo(() => snapPoints || [SCREEN_HEIGHT / 2.5], []);
  // callbacks
  /*  const handleChange = useCallback((index) => {
    if (index === 0) {
      console.log('Modal Been Dismissed');
    }
  }, []); */
  const handlePresentPress = useCallback(() => {
    //  bottomSheetRef &&
    present(
      <View
        style={{
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
          borderTopStartRadius: 20,
          borderTopEndRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{height: '90%', width: '90%'}}>{children}</View>
      </View>,
      {
        // ref: bottomSheetRef,
        snapPoints: SNAP_POINTS,
        animationDuration: 500,
        overlayComponent: BottomSheetOverlay,
        overlayOpacity: 0.3,
        dismissOnOverlayPress: true,
        handleComponent: () => {
          return (
            <View
              style={{
                width: 68,
                height: 6,
                borderRadius: 3,
                backgroundColor: WHITE_COLOR,
                shadowColor: 'rgba(0, 0, 0, 0.16)',
                shadowOffset: {
                  width: 0,
                  height: 0,
                },
                shadowRadius: 11,
                shadowOpacity: 1,
                alignSelf: 'center',
                marginBottom: 5,
              }}
            />
          );
        },
        onChange: handleChange,
      },
    );
  }, [present, handleChange]);

  return (
    <View style={styles.container}>
      <Button title={'open'} onPress={handlePresentPress} />
    </View>
  );
};

export {CustomBottomSheet};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
