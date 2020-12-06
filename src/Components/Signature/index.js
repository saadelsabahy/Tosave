import React, {useState, useRef} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import Signature from 'react-native-signature-canvas';
import {
  GREEN100,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from '../../constants/design/colorsAndSizes';
import {CustomText} from '../customText';

const CustomSignature = ({reference, handleOk}) => {
  const handleEmpty = () => {
    console.log('Empty');
  };

  const style = `
 
 .m-signature-pad--footer {
      display: none;
    } 
    .m-signature-pad{
     width:100%;
     height:100%;
     background-color:#f3f3f3;
     box-shadow:none !important;
    // border-radius:19px !important;
     overflow:hidden;
     top: 0;
     left: 0;
     border: none !important;
    }
    .m-signature-pad--body {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      
    }
   
    `;
  return (
    <View style={[styles.container]}>
      <View style={{width: '100%', height: '100%'}}>
        <Signature
          ref={reference}
          onOK={handleOk}
          clearText="Clear"
          confirmText="Save"
          webStyle={style}
          penColor={GREEN100}
          backgroundColor="transparent"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH - 20,
    height: SCREEN_HEIGHT / 2,
    alignSelf: 'center',
    borderRadius: 19,
    backgroundColor: '#f3f3f3',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
});

export {CustomSignature};
