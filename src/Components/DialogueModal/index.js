import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  FONT_16,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from '../../constants/design/colorsAndSizes';
import {DurationIcon} from '../../Svgs';
import {CustomBottomSheet} from '../BottomSheet';
import {CustomButton} from '../CustomButton';
import {CustomText} from '../customText';

const DialogueModal = ({
  reference,
  children,
  icon,
  headerText,
  dialogueSentance,
  headerTextStyle,
  dialogueSentanceStyle,
  DialogeButtonColor,
  DialogueButtonText,
  DialogueButtonTextStyle,
  onDialogueButtonPressed,
}) => {
  return (
    <CustomBottomSheet referance={reference} snapPoints={SCREEN_HEIGHT / 2}>
      <View style={[styles.contentContainer]}>
        <View style={[styles.header]}>
          {icon && icon}
          <CustomText
            text={headerText || 'headerText'}
            textStyle={[styles.headerText, headerTextStyle]}
          />
        </View>

        <View style={[styles.dialogueTextContainer]}>
          <CustomText
            text={dialogueSentance}
            textStyle={[styles.dialogueText, dialogueSentanceStyle]}
          />
        </View>

        <View style={[styles.childrenContainer]}>{children}</View>

        {/*  {children} */}

        <CustomButton
          buttonColor={DialogeButtonColor}
          buttonText={DialogueButtonText}
          buttonStyle={DialogueButtonTextStyle}
          onPress={onDialogueButtonPressed}
        />
      </View>
    </CustomBottomSheet>
  );
};

export {DialogueModal};

const styles = StyleSheet.create({
  contentContainer: {
    width: SCREEN_WIDTH * 0.95,
    height: SCREEN_HEIGHT / 2,
    //backgroundColor: 'red',
    justifyContent: 'space-evenly',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: SCREEN_HEIGHT / 12,
  },
  dialogueTextContainer: {
    justifyContent: 'center',
    //backgroundColor: '#ddd',
  },
  dialogueText: {
    fontSize: FONT_16 + 1,
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: '#263231',
  },
  childrenContainer: {
    height: SCREEN_HEIGHT / 6,
    justifyContent: 'space-evenly',
    maxHeight: SCREEN_HEIGHT / 7,
    //backgroundColor: '#842',
  },
});
