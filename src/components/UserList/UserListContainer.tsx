import * as React from 'react';
import {connect} from 'react-redux';

import {AppState, AppThunkAction, User} from 'src/domains/types';
import UserList from 'src/components/UserList/UserList';
import * as userDataActions from 'src/domains/userData/userDataActions';

interface Props {
    userData: Array<User>,
    loadUserList: () => AppThunkAction<Promise<any>>
}

class UserListContainer extends React.Component<Props> {
    componentDidMount() {
        this.props.loadUserList();
    }

    render() {
        return <UserList userData={this.props.userData}/>;
    }
}

const mapActionCreatorsToProps = {
    loadUserList: userDataActions.loadUserList
};

const mapStateToProps = (state: AppState) => ({
    userData: state.userDataState.userData
});

export default connect(mapStateToProps, mapActionCreatorsToProps)(UserListContainer);