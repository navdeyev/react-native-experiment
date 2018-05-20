import * as React from 'react';
import {FlatList, ListRenderItemInfo, StyleSheet, Text} from 'react-native';

import {User} from 'src/domains/types';

const styles = StyleSheet.create({
    userList: {
        marginTop: 25,
    },
    userRow: {
        padding: 10
    }
});

export const renderItem = (info: ListRenderItemInfo<User>) => {
    const user = info.item;
    const text = `${ user.name } : ${ user.email }`
    return <Text style={styles.userRow}>{text}</Text>;
};

export interface Props {
    userData: Array<User>
}

const UserList: React.SFC<Props> = (props) => {
    const {userData} = props;
    return (
        <FlatList
            style={styles.userList}
            data={userData}
            renderItem={renderItem}
            keyExtractor={(user: User) => '' + user.id}
        />
    );
};

export default UserList;