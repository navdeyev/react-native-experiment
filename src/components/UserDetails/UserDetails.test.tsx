import * as React from 'react';
import {shallow} from 'enzyme';

import {user} from 'src/testMockData/userMock';

import UserDetails from './UserDetails';

describe('UserDetails', () => {

    it('renders a component', () => {
        const render = shallow(<UserDetails user={user}/>);
        expect(render.getElement()).toMatchSnapshot();
    });

});