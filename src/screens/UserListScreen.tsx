import i18n from 'i18n-js';
import * as React from 'react';
import {connect} from 'react-redux';

import {AppState, AppThunkAction, HasNavigate, User} from 'src/domains/types';
import * as userDataActions from 'src/domains/userData/userDataActions';

import UserList from 'src/components/UserList/UserList';
import ScreenLayout from 'src/components/ScreenLayout/ScreenLayout';

export interface Props {
    navigation: HasNavigate,
    userData: Array<User>,
    loadUserList: () => AppThunkAction<Promise<any>>
}

export class UserListScreen extends React.Component<Props> {
    static navigationOptions = () => ({title: i18n.t('users')});

    componentDidMount() {
        this.props.loadUserList();
    }

    selectUserHandler = (user: User) => {
        this.props.navigation.navigate({
            routeName: 'UserDetails',
            params: {user}
        });
    };

    render() {
        return (
            <ScreenLayout>
                <UserList
                    userData={this.props.userData}
                    onSelectUser={this.selectUserHandler}
                />
            </ScreenLayout>
        );
    }
}

const mapActionCreatorsToProps = {
    loadUserList: userDataActions.loadUserList
};

const mapStateToProps = (state: AppState) => ({
    userData: state.userDataState.userData
});

export default connect(mapStateToProps, mapActionCreatorsToProps)(UserListScreen);
