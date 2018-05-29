import * as React from 'react';
import {shallow} from 'enzyme';

import FormTextInput, {WrappedInputField} from './FormTextInput';

describe('FormTextInput', () => {

    let props: WrappedInputField;
    beforeEach(() => {
        props = {
            input: {value: '', onChange: jest.fn()},
            meta: {}
        };
    });

    it('renders the TextInput', () => {
        const rendered = shallow(<FormTextInput {...props}/>);
        expect(rendered.find('[testID="form-text-input-label"]').exists()).toBe(false);
        expect(rendered.find('[testID="form-text-input-error"]').exists()).toBe(false);
        expect(rendered.getElement()).toMatchSnapshot();
    });

    it('renders the TextInput', () => {
        const propsWithLabelAndError = {
            ...props,
            label: 'Field label',
            meta: { error: 'Please add a value' }
        };
        const rendered = shallow(<FormTextInput {...propsWithLabelAndError}/>);
        expect(rendered.find('[testID="form-text-input-label"]').exists()).toBe(true);
        expect(rendered.find('[testID="form-text-input-error"]').exists()).toBe(true);
        expect(rendered.getElement()).toMatchSnapshot();
    });

});