import * as React from 'react';
import {shallow} from 'enzyme';

import {Form, FormProps} from './UserDetailsForm';

describe('UserDetailsForm', () => {

    it('renders a component', () => {
        const props: FormProps = {
            onSubmit: jest.fn(),
            handleSubmit: jest.fn(() => jest.fn()),
        };
        const rendered = shallow(<Form {...props}/>);
        expect(rendered.getElement()).toMatchSnapshot();
    });

});