import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  FONT_25,
  GREEN100,
  SCREEN_HEIGHT,
} from '../../constants/design/colorsAndSizes';
import {DurationIcon} from '../../Svgs';
import {Block} from '../Block';
import {CustomBottomSheet} from '../BottomSheet';
import {CustomButton} from '../CustomButton';
import {CustomText} from '../customText';
import {CustomSignature} from '../Signature';
import {Modal, Portal, Button, Provider} from 'react-native-paper';
const SignatureModal = ({
  reference,
  buttonText,
  visible,
  hideSignatureModal,
  onConfirmSignature,
}) => {
  /*   const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false); */
  return (
    <Provider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideSignatureModal}
          contentContainerStyle={styles.containerStyle}>
          <Block containerStyle={[styles.block]}>
            <View style={[styles.header]}>
              <DurationIcon />
              <CustomText
                text={'draw Your signature'}
                textStyle={[styles.headerText]}
              />
            </View>
            <CustomSignature
              handleOk={onConfirmSignature}
              reference={reference}
            />

            <View style={[styles.buttonContainer]}>
              <CustomButton
                buttonText={buttonText || 'apply'}
                onPress={hideSignatureModal}
              />
            </View>
          </Block>
        </Modal>
      </Portal>
    </Provider>
  );
};

export {SignatureModal};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 0,
  },
  block: {
    height: SCREEN_HEIGHT * 0.7,

    justifyContent: 'space-evenly',
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  header: {
    width: '100%',
    height: SCREEN_HEIGHT / 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: FONT_25,
    fontWeight: '600',
    fontStyle: 'normal',
    color: GREEN100,
    marginStart: 10,
  },
  buttonContainer: {
    height: SCREEN_HEIGHT / 7,
    width: '100%',

    //backgroundColor: 'red',
    marginTop: 10,
  },
});
