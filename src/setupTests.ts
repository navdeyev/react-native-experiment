import i18n from 'i18n-js';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import en from 'src/localization/en';

i18n.fallbacks = true;
i18n.translations = {en};
i18n.locale = 'en';

// Setup enzyme's react adapter
Enzyme.configure({adapter: new EnzymeAdapter()});

