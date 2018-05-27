import * as React from 'react';
import {shallow} from 'enzyme';

import {user} from 'src/testMockData/userMock';
import UserList from 'src/components/UserList/UserList';

import {Props, UserListScreen} from './UserListScreen';

describe('UserListScreen', () => {

    let props: Props;
    beforeEach(() => {
        props = {
            userData: [user],
            loadUserList: jest.fn(),
            navigation: {
                navigate: jest.fn()
            }
        };
    });

    it('renders a component', () => {
        const rendered = shallow(<UserListScreen {...props} />);
        expect(rendered.getElement()).toMatchSnapshot();
    });

    it('executes navigation', () => {
        const rendered = shallow(<UserListScreen {...props} />);
        const userList = rendered.find(UserList);
        userList.simulate('selectUser', user);
        expect(props.navigation.navigate).toBeCalledWith({
            routeName: 'UserDetails',
            params: {
                user: user
            }
        });
    });

});