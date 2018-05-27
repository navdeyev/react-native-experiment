import * as React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {NavigationScreenProps} from 'react-navigation';
import styled from 'styled-components';

import {AppState, AppThunkAction, User} from 'src/domains/types';
import UserList from 'src/components/UserList/UserList';
import * as userDataActions from 'src/domains/userData/userDataActions';

const StyledView = styled(View)`
  padding: 20px;
`;

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
        this.props.navigation.navigate({
            routeName: 'UserDetails',
            params: {user}
        });
    };

    render() {
        return (
            <StyledView>
                <UserList
                    userData={this.props.userData}
                    onSelectUser={this.selectUserHandler}
                />
            </StyledView>
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