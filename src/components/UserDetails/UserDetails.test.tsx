import * as React from 'react';
import {shallow} from 'enzyme';

import {user} from 'src/testMockData/userMock';

import UserDetails, {Props} from './UserDetails';

describe('UserDetails', () => {

    let props: Props;
    beforeEach(() => {
        props = {
            user,
            onEditUser: jest.fn()
        }
    });

    it('renders a component', () => {
        const render = shallow(<UserDetails {...props}/>);
        expect(render.getElement()).toMatchSnapshot();
    });

    it('executes onEditUser when edit button was pressed', () => {
        const render = shallow(<UserDetails {...props}/>);
        const btn = render.find('[testID="edit-user-details-button"]');
        btn.simulate('press');
        expect(props.onEditUser).toHaveBeenCalledWith(props.user);
    });
});