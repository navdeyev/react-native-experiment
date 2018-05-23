import * as React from 'react';
import {connect} from 'react-redux';
import {NavigationScreenProps} from 'react-navigation';

import {AppState, AppThunkAction, User} from 'src/domains/types';
import UserList from 'src/components/UserList/UserList';
import * as userDataActions from 'src/domains/userData/userDataActions';

interface Props extends NavigationScreenProps {
    userData: Array<User>,
    loadUserList: () => AppThunkAction<Promise<any>>
}

class UserListScreen extends React.Component<Props> {
    static navigationOptions = {
        title: 'Users'
    };

    componentDidMount() {
        this.props.loadUserList();
    }

    selectUserHandler = (user: User) => {
        console.log('selectUserHandler', this.props);
        this.props.navigation.navigate({
            routeName: 'UserDetails',
            params: {user}
        });
    };

    render() {
        return <UserList
            userData={this.props.userData}
            onSelectUser={this.selectUserHandler}
        />;
    }
}

const mapActionCreatorsToProps = {
    loadUserList: userDataActions.loadUserList
};

const mapStateToProps = (state: AppState) => ({
    userData: state.userDataState.userData
});

export default connect(mapStateToProps, mapActionCreatorsToProps)(UserListScreen);