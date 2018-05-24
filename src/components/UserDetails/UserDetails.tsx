import * as React from 'react';
import {Text, View} from 'react-native';

import {User} from 'src/domains/types';

interface Props {
    user: User;
}

const UserDetails: React.SFC<Props> = props => {
    const {user} = props;
    return (
        <View>
            <Text>Name: {user.name}</Text>
            <Text>Username: {user.username}</Text>
            <Text>Email: {user.email}</Text>
            <Text>Phone: {user.phone}</Text>
        </View>
    );
};

export default UserDetails;
