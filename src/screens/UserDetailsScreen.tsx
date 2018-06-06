import i18n from 'i18n-js';
import * as React from 'react';

import {HasGetParam, HasNavigate, User} from '../domains/types';
import UserDetails from '../components/UserDetails/UserDetails';
import ScreenLayout from '../components/ScreenLayout/ScreenLayout';

interface ScreenParams {
    user: User
}

export interface Props {
    navigation: HasGetParam<ScreenParams> & HasNavigate
}

export const navigationOptions = ({navigation}: Props) => {
    const user = navigation.getParam('user');
    return {
        title: `${i18n.t('userDetails')}: ${user.username}`
    };
};

class UserDetailsScreen extends React.Component<Props> {
    static navigationOptions = navigationOptions;

    render() {
        const user: User = this.props.navigation.getParam('user');

        const onEditUserHandler = () => {
            this.props.navigation.navigate({
                routeName: 'UserDetailsForm',
                params: {user}
            });
        };

        return (
            <ScreenLayout>
                <UserDetails user={user} onEditUser={onEditUserHandler}/>
            </ScreenLayout>
        );
    }
}

export default UserDetailsScreen;
