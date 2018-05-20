import * as React from 'react';
import {shallow} from 'enzyme';
import {ListRenderItemInfo} from 'react-native';

import {User} from 'src/domains/types';

import UserList, {Props, renderItem} from './UserList';

describe('UserList', () => {

    const user: User = {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
            geo: {
                lat: '-37.3159',
                lng: '81.1496'
            }
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets'
        }
    };

    describe('renderItem', () => {
        it('renders the component', () => {
            const item: ListRenderItemInfo<User> = {
                item: user,
                index: 1,
                separators: {
                    highlight: jest.fn(),
                    unhighlight: jest.fn(),
                    updateProps: jest.fn(),
                }
            };
            const rendered = shallow(renderItem(item));
            expect(rendered.text()).toBe('Leanne Graham : Sincere@april.biz');
            expect(rendered.getElement()).toMatchSnapshot();
        });
    });

    describe('UserList', () => {
        it('renders the component', () => {
            const props: Props = {
                userData: [user]
            };
            const rendered = shallow(<UserList {...props} />);
            expect(rendered.getElement()).toMatchSnapshot();
        });
    });

});