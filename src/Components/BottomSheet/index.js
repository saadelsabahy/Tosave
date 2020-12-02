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
import {BottomSheetContainer} from '../BottomSheetBlock';
import {Handle} from '../Handle';
const CustomBottomSheet = ({children, snapPoints, bottomSheetRef}) => {
  const {present, dismiss} = useBottomSheetModal();
  const SNAP_POINTS = useMemo(() => snapPoints || [SCREEN_HEIGHT / 2.5], []);

  const handleChange = useCallback((index) => {
    if (index === 0) {
      console.log('Modal Been Dismissed');
    }
  }, []);
  const handlePresentPress = useCallback(() => {
    present(
      <BottomSheetContainer>
        <CustomText text="hello" />
      </BottomSheetContainer>,
      {
        snapPoints: SNAP_POINTS,
        animationDuration: 500,
        overlayComponent: BottomSheetOverlay,
        overlayOpacity: 0.3,
        dismissOnOverlayPress: true,
        handleComponent: () => {
          return <Handle />;
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
