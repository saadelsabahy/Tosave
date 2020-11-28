/**
 * @format
 */
import 'dayjs/locale/ar';
import 'dayjs/locale/en';
import 'react-native-gesture-handler';
import {AppRegistry, I18nManager} from 'react-native';
import dayjs from 'dayjs';
import App from './App';
import {name as appName} from './app.json';

dayjs.locale(I18nManager.isRTL ? 'ar' : 'en');
AppRegistry.registerComponent(appName, () => App);
