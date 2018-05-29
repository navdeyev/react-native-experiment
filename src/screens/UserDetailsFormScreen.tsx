import i18n from 'i18n-js';
import {omit} from 'ramda';
import * as React from 'react';

import {HasGetParam, User} from 'src/domains/types';
import ScreenLayout from 'src/components/ScreenLayout/ScreenLayout';
import UserDetailsForm from 'src/components/UserDetailsForm/UserDetailsForm';

import validate from 'src/domains/userDetailsForm/userDetailsFormService';

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
        const initialValues = omit(['id', 'address', 'company'])(user);

        return (
            <ScreenLayout>
                <UserDetailsForm initialValues={initialValues} onSubmit={validate}/>
            </ScreenLayout>
        );
    }
}

export default UserDetailsFormScreen;
