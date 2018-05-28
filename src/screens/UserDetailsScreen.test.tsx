import * as React from 'react';
import {shallow} from 'enzyme';

import UserDetailsScreen, {navigationOptions, Props} from './UserDetailsScreen';
import UserDetails from 'src/components/UserDetails/UserDetails';

import {user} from 'src/testMockData/userMock';

describe('UserDetailsScreen', () => {

    let props: Props;
    beforeEach(() => {
        props = {
            navigation: {
                getParam: jest.fn(() => user),
                navigate: jest.fn()
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

    it('executes navigate when onEditUser was pressed', () => {
        const rendered = shallow(<UserDetailsScreen {...props} />);
        const details = rendered.find(UserDetails);
        details.simulate('editUser', user);
        expect(props.navigation.navigate).toHaveBeenCalledWith({
            routeName: 'UserDetailsForm',
            params: {user}
        });
    });

});