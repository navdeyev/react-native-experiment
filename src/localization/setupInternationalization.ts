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
    i18n.locale = 'en';
    return Promise.resolve();
};
