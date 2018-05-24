import * as React from 'react';
import {View} from 'react-native';
import {NavigationScreenProps} from 'react-navigation';
import styled from 'styled-components/native';

import {User} from 'src/domains/types';
import UserDetails from 'src/components/UserDetails/UserDetails';

const StyledView = styled(View)`
  padding: 20px;
`;

interface Props extends NavigationScreenProps {
}

class UserDetailsScreen extends React.Component<Props> {
    static navigationOptions = {
        title: 'User details'
    };

    render() {
        const user: User = this.props.navigation.getParam('user');
        return (
            <StyledView>
                <UserDetails user={user}/>
            </StyledView>
        );
    }
}

export default UserDetailsScreen;
