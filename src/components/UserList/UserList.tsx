import * as React from 'react';
import {FlatList, GestureResponderEvent, ListRenderItemInfo, StyleSheet, Text} from 'react-native';

import {User} from 'src/domains/types';

const styles = StyleSheet.create({
    userList: {
        marginTop: 25,
    },
    userRow: {
        padding: 10
    }
});

export const renderItem = (onSelectUser: (user: User) => void) =>
    (info: ListRenderItemInfo<User>) => {
        const user = info.item;
        const text = `${ user.name } : ${ user.email }`;
        const pressHandler = (e: GestureResponderEvent) => {
            onSelectUser(user);
        };
        return <Text style={styles.userRow} onPress={pressHandler}>{text}</Text>;
    };

export interface Props {
    userData: Array<User>;
    onSelectUser: (user: User) => void;
}

export const keyExtractor = (user: User) => '' + user.id;

const UserList: React.SFC<Props> = (props) => {
    const {userData, onSelectUser} = props;
    return (
        <FlatList
            style={styles.userList}
            data={userData}
            renderItem={renderItem(onSelectUser)}
            keyExtractor={keyExtractor}
        />
    );
};

export default UserList;