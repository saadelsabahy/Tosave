import React, {useState, useRef, useCallback} from 'react';
import {I18nManager, StyleSheet, Text, View} from 'react-native';
import {CustomBottomSheet, LanguageSheet, LoginInput} from '../Components';
import {useTranslation} from 'react-i18next';
import RNRestart from 'react-native-restart';
export const LanguageSheetContext = React.createContext();
const LanguageSheetProvider = ({children}) => {
  const languageModalRef = useRef();
  const {t, i18n} = useTranslation();
  const [selectedLanguage, setselectedLanguage] = useState(
    I18nManager.isRTL ? 'ar' : 'en',
  );

  //select new language
  const changeLanguage = (lang) => {
    setselectedLanguage(lang);
  };
  //onChangeLanguageComplete

  const onChangeLanguageComplete = useCallback(async () => {
    // const language_code = I18nManager.isRTL ? 'en' : 'ar';
    try {
      console.log(selectedLanguage);
      await i18n.changeLanguage(selectedLanguage);
      languageModalRef.current?.close();
      I18nManager.forceRTL(selectedLanguage == 'ar');
      RNRestart.Restart();
    } catch (e) {
      console.log('switch lang error', error);
    }
  }, [i18n, selectedLanguage]);
  return (
    <LanguageSheetContext.Provider value={{languageModalRef, selectedLanguage}}>
      {children}
      <CustomBottomSheet referance={languageModalRef}>
        <LanguageSheet
          arabic={t('drawer:language', {lng: 'ar'})}
          english={t('drawer:language', {lng: 'en'})}
          selectedLanguage={selectedLanguage}
          changeLanguage={changeLanguage}
          buttonText={t('languageSheet:change')}
          onChangeLanguageComplete={onChangeLanguageComplete}
          title={t('languageSheet:changeLanguage')}
        />
      </CustomBottomSheet>
    </LanguageSheetContext.Provider>
  );
};

export default LanguageSheetProvider;

const styles = StyleSheet.create({});
