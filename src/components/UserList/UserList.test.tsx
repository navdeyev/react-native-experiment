import * as React from 'react';
import {shallow} from 'enzyme';
import {ListRenderItemInfo} from 'react-native';

import {User} from 'src/domains/types';
import {user} from 'src/testMockData/userMock';

import UserList, {keyExtractor, Props, renderItem} from './UserList';

describe('UserList', () => {

    describe('renderItem', () => {

        let itemInfo: ListRenderItemInfo<User>;
        beforeEach(() => {
            itemInfo = {
                item: user,
                index: 1,
                separators: {
                    highlight: jest.fn(),
                    unhighlight: jest.fn(),
                    updateProps: jest.fn(),
                }
            };
        });

        it('renders the component', () => {
            const onSelectUser = jest.fn();
            const rendered = shallow(renderItem(onSelectUser)(itemInfo));
            expect(rendered.text()).toBe('Leanne Graham : Sincere@april.biz');
            expect(rendered.getElement()).toMatchSnapshot();
        });

        it('executes onSelectUser when row is pressed', () => {
            const onSelectUser = jest.fn();
            const rendered = shallow(renderItem(onSelectUser)(itemInfo));
            rendered.simulate('press');
            expect(onSelectUser).toHaveBeenCalledWith(itemInfo.item);
        });
    });

    describe('UserList', () => {
        it('renders the component', () => {
            const props: Props = {
                userData: [user],
                onSelectUser: jest.fn()
            };
            const rendered = shallow(<UserList {...props} />);
            expect(rendered.getElement()).toMatchSnapshot();
        });
    });

    describe('keyExtractor', () => {
        it('generates a key', () => {
            expect(keyExtractor(user)).toBe('' + user.id);
        });
    });
});