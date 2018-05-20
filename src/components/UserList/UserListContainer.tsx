import * as React from 'react';

import {User} from 'src/domains/types';
import UserList from 'src/components/UserList/UserList';

interface Props {
}

interface State {
    userData: Array<User>
}

class UserListContainer extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            userData: []
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => this.setState(() => {
                return {userData: json};
            }));
    }

    render() {
        return <UserList userData={this.state.userData}/>;
    }
}

export default UserListContainer;