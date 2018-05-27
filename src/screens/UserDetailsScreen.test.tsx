import * as React from 'react';
import {shallow} from 'enzyme';

import UserDetailsScreen, {navigationOptions, Props} from './UserDetailsScreen';
import {user} from 'src/testMockData/userMock';

describe('UserDetailsScreen', () => {

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
            title: `User details: ${user.username}`
        }));
    });

    it('renders a component', () => {
        const rendered = shallow(<UserDetailsScreen {...props} />);
        expect(rendered.getElement()).toMatchSnapshot();
    });

});