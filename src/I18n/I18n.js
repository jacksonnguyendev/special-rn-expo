import I18n from 'react-native-i18n';
import en from './en';
import vi from './vi';

// const languageCode = 'vi_VN';

I18n.translations = {
  en,
  en_US: en,
  vi,
  vi_VN: vi,
  vi_US: vi,
};

// I18n.locale = languageCode;

export default I18n;
