import * as React from 'react';
import {shallow} from 'enzyme';
import {Text} from 'react-native';
import ExpandablePanel, {ChildrenContainer, Props} from './ExpandablePanel';

describe('ExpandablePanel', () => {

    let props: Props;
    beforeEach(() => {
        props = {
            children: <Text>A journey of a thousand miles starts with a single step</Text>,
            header: 'View a quote of the day'
        }
    });

    it('does not display children in initial state', () => {
        const rendered = shallow(<ExpandablePanel {...props} />);
        expect(rendered.find(ChildrenContainer).exists()).toBe(false);
        expect(rendered.getElement()).toMatchSnapshot();
    });

    it('displays children in expanded state', () => {
        const rendered = shallow(<ExpandablePanel {...props} />);
        const switchControl = rendered.find('[testID="expandable-panel-switch"]');
        switchControl.simulate('valueChange');
        expect(rendered.find(ChildrenContainer).exists()).toBe(true);
        expect(rendered.getElement()).toMatchSnapshot();
    });
});
