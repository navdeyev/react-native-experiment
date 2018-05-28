import i18n from 'i18n-js';
import * as React from 'react';
import {Text} from 'react-native';

import {HasGetParam, User} from 'src/domains/types';
import ScreenLayout from 'src/components/ScreenLayout/ScreenLayout';

interface ScreenParams {
    user: User
}

export interface Props {
    navigation: HasGetParam<ScreenParams>
}

export const navigationOptions = ({navigation}: Props) => {
    const user = navigation.getParam('user');
    return {
        title: `${i18n.t('edit')}: ${user.username}`
    };
};

class UserDetailsFormScreen extends React.Component<Props> {
    static navigationOptions = navigationOptions;

    render() {
        const user: User = this.props.navigation.getParam('user');

        return (
            <ScreenLayout>
                <Text>{user.username}</Text>
            </ScreenLayout>
        );
    }
}

export default UserDetailsFormScreen;
