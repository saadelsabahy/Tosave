import React, {useState, useRef} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CustomBottomSheet, LanguageSheet} from '../Components';
import {useTranslation} from 'react-i18next';

export const LanguageSheetContext = React.createContext();
const LanguageSheetProvider = ({children}) => {
  const languageModalRef = useRef();
  const {t, i18n} = useTranslation();
  const [selectedLanguage, setselectedLanguage] = useState('en');

  //select new language
  const changeLanguage = (lang) => {
    setselectedLanguage(lang);
  };
  //onChangeLanguageComplete
  const onChangeLanguageComplete = () => {
    console.log(selectedLanguage);
    languageModalRef.current?.close();
  };
  return (
    <LanguageSheetContext.Provider value={{languageModalRef, selectedLanguage}}>
      {children}
      <CustomBottomSheet referance={languageModalRef}>
        <LanguageSheet
          arabic={t('language', {lng: 'ar'})}
          english={t('language', {lng: 'en'})}
          selectedLanguage={selectedLanguage}
          changeLanguage={changeLanguage}
          buttonText={t('change')}
          onChangeLanguageComplete={onChangeLanguageComplete}
          title={t('changelanguage')}
        />
      </CustomBottomSheet>
    </LanguageSheetContext.Provider>
  );
};

export default LanguageSheetProvider;

const styles = StyleSheet.create({});
