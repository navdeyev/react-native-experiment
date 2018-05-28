import 'jest-styled-components';
import * as React from 'react';
import {shallow} from 'enzyme';
import {ListRenderItemInfo} from 'react-native';

import {User} from 'src/domains/types';
import {user} from 'src/testMockData/userMock';

import UserList, {keyExtractor, Props, renderItem, StyledRow} from './UserList';

describe('UserList', () => {

    describe('renderItem', () => {

        let itemInfo: ListRenderItemInfo<User>;
        beforeEach(() => {
            itemInfo = {
                item: user,
                index: 0,
                separators: {
                    highlight: jest.fn(),
                    unhighlight: jest.fn(),
                    updateProps: jest.fn(),
                }
            };
        });

        it('renders the component', () => {
            const onSelectUser = jest.fn();
            const rendered = shallow(renderItem(onSelectUser, 10)(itemInfo));
            expect(rendered.prop('lastChild')).toBe(false);

            const userLabel = rendered.find('[testID="user-row-text-0"]');
            expect(userLabel.prop('children')).toEqual('Bret <Leanne Graham>');

            expect(rendered.getElement()).toMatchSnapshot();
        });

        it('renders the component as the last child', () => {
            const onSelectUser = jest.fn();
            const rendered = shallow(renderItem(onSelectUser, 1)(itemInfo));
            expect(rendered.prop('lastChild')).toBe(true);
            expect(rendered.getElement()).toMatchSnapshot();
        });

        it('executes onSelectUser when row is pressed', () => {
            const onSelectUser = jest.fn();
            const rendered = shallow(renderItem(onSelectUser, 1)(itemInfo));
            const highlight = rendered.find('[testID="view-details-button-0"]');
            highlight.simulate('press');
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

describe('StyledRow', () => {
    it('adds bottom margin to the component if it is not the last child', () => {
        const rendered = shallow(<StyledRow lastChild={false}/>);
        expect(rendered).toHaveStyleRule('margin-bottom', '8px');
    });

    it('adds removes bottom margin from the component if it is the last child', () => {
        const rendered = shallow(<StyledRow lastChild={true}/>);
        expect(rendered).toHaveStyleRule('margin-bottom', '0');
    });
});
