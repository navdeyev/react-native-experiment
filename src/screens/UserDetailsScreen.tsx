import * as React from 'react';
import {NavigationScreenProps} from 'react-navigation';
import {User} from 'src/domains/types';
import UserDetails from "../components/UserDetails/UserDetails";

interface Props extends NavigationScreenProps {
}

class UserDetailsScreen extends React.Component<Props> {
    static navigationOptions = {
        title: 'User details'
    };

    render() {
        const user: User = this.props.navigation.getParam('user');
        return <UserDetails user={user}/>;
    }
}

export default UserDetailsScreen;
