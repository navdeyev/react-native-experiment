import Expo from 'expo';
import i18n from 'i18n-js';

import en from './en';
import de from './de';

export const initLocale = () => {
    i18n.fallbacks = true;
    i18n.translations = {
        en,
        en_US: en,
        de
    };

    return Expo.Util.getCurrentLocaleAsync().then((locale: string) => {
        i18n.locale = locale;
    });
};
