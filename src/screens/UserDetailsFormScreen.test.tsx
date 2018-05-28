import * as React from 'react';
import {shallow} from 'enzyme';

import UserDetailsFormScreen, {navigationOptions, Props} from './UserDetailsFormScreen';

import {user} from 'src/testMockData/userMock';

describe('UserDetailsFormScreen', () => {

    let props: Props;
    beforeEach(() => {
        props = {
            navigation: {
                getParam: jest.fn(() => user)
            }
        };
    });

    it('displays username in the navigation section', () => {
        expect(navigationOptions(props)).toEqual(expect.objectContaining({
            title: `Edit: ${user.username}`
        }));
    });

    it('renders a component', () => {
        const rendered = shallow(<UserDetailsFormScreen {...props} />);
        expect(rendered.getElement()).toMatchSnapshot();
    });
});