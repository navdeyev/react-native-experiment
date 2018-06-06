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
    //TODO: find out if there is a way to request the locale from the device.
    i18n.locale = 'en';
    return Promise.resolve();
};
