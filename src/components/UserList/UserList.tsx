import * as React from 'react';
import {FlatList, ListRenderItemInfo, StyleSheet, Text} from 'react-native';

import {User} from 'src/domains/types';

interface Props {
}

interface State {
    userData: Array<User>
}

class UserList extends React.Component<Props, State> {
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

    renderItem = (info: ListRenderItemInfo<User>) => {
        const user = info.item;
        return <Text style={styles.userRow}>{user.name} : {user.email}</Text>;
    };

    render() {
        return (
            <FlatList
                style={styles.userList}
                data={this.state.userData}
                renderItem={this.renderItem}
                keyExtractor={(user: User) => '' + user.id}
            />
        );
    }
}

const styles = StyleSheet.create({
    userList: {
        marginTop: 25,
    },
    userRow: {
        padding: 10
    }
});

export default UserList;