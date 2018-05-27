import * as React from 'react';
import {shallow} from 'enzyme';

import AddressDetails from './AddressDetails';
import {address} from 'src/testMockData/addressMock';

describe('AddressDetails', () => {

    it('renders a component', () => {
        const render = shallow(<AddressDetails address={address}/>);
        expect(render.getElement()).toMatchSnapshot();
    });

});
