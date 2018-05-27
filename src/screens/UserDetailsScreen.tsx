import * as React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';

import {HasGetParam, User} from 'src/domains/types';
import UserDetails from 'src/components/UserDetails/UserDetails';

const StyledView = styled(View)`
  padding: 20px;
`;

interface ScreenParams {
    user: User
}

export interface Props {
    navigation: HasGetParam<ScreenParams>
}

export const navigationOptions = ({navigation}: Props) => {
    const user = navigation.getParam('user');
    return {
        title: `User details: ${ user.username }`
    };
};

class UserDetailsScreen extends React.Component<Props> {
    static navigationOptions = navigationOptions;

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
