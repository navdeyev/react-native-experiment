import * as React from 'react';
import {Switch, Text, View} from 'react-native';
import styled from 'styled-components';

const Wrapper = styled(View)`
  border: 1px solid #333;
  margin-top: 5px;
`;

const PanelHeaderContainer = styled(View)`
  padding: 4px;
  display: flex;
  flex-direction: row;
  border: 0 solid #333;
  justify-content: space-between;
  border-bottom-width: ${ (props: State) => props.expanded ? '1px' : '0'};
`;

const PanelHeader = styled(View)`
  display: flex;
  justify-content: center;
`;

export const ChildrenContainer = styled(View)`
  padding: 4px;
`;

export interface Props {
    testID?: string;
    header: string;
    children: React.ReactNode
}

interface State {
    expanded: boolean
}

class ExpandablePanel extends React.Component<Props, State> {

    private static defaultProps = {
        testID: 'expandable-panel'
    };

    constructor(props: Props) {
        super(props);
        this.state = {expanded: false};
    }

    onValueChange = () => {
        this.setState((prevState: State) => {
            return {expanded: !prevState.expanded};
        });
    };

    render() {
        const {testID, header, children} = this.props;
        return (
            <Wrapper>
                <PanelHeaderContainer expanded={this.state.expanded}>
                    <PanelHeader><Text>{header}</Text></PanelHeader>
                    <Switch value={this.state.expanded}
                            onValueChange={this.onValueChange}
                            testID={`${testID}-switch`}/>
                </PanelHeaderContainer>
                {this.state.expanded ? <ChildrenContainer>{children}</ChildrenContainer> : null}
            </Wrapper>
        );
    }

}

export default ExpandablePanel;
