import React, {useRef} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {
  Block,
  CustomButton,
  CustomSignature,
  CustomText,
  DialogueModal,
  DurationModal,
  Header,
  RepliesButton,
  ReportHeader,
  SignatureModal,
  UserSection,
} from '../../Components';
import {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from '../../constants/design/colorsAndSizes';
const ReportDetails = ({navigation, route}) => {
  const {category, date} = route.params;
  const durationModalRef = useRef(null);
  const [showSignatureModal, setshowSignatureModal] = React.useState(false);
  const [signature, setsignature] = React.useState(null);

  const showSignatue = () => setshowSignatureModal(true);
  const hideSignature = () => {
    setshowSignatureModal(false);
  };

  const onConfirmSignature = (par) => {
    setsignature(par);
  };
  return (
    <View style={[styles.container]}>
      <Block>
        <Header back />

        <View style={[styles.textContainer]}>
          <CustomText
            text={`${category} ${category.includes('report') ? '' : 'report'}`}
          />
          <CustomText text={`${date}`} />
        </View>
        <CustomButton
          onPress={() => {
            durationModalRef.current.open();
          }}
        />
        <RepliesButton />
      </Block>
      <DialogueModal reference={durationModalRef} />
      {/*  <SignatureModal
        visible={showSignatureModal}
        hideSignatureModal={hideSignature}
        reference={durationModalRef}
        onConfirmSignature={onConfirmSignature}
      /> */}
    </View>
  );
};

export {ReportDetails};

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    alignItems: 'center',
  },
  textContainer: {
    width: '100%',
    height: SCREEN_HEIGHT / 13,
    justifyContent: 'space-between',
    backgroundColor: '#ddd',
  },
});
