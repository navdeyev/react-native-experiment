import * as React from 'react';
import {Text, View} from 'react-native';

import {User} from 'src/domains/types';
import AddressDetails from 'src/components/AddressDetails/AddressDetails';
import ExpandablePanel from 'src/components/ExpandablePanel/ExpandablePanel';

interface Props {
    user: User;
}

const UserDetails: React.SFC<Props> = props => {
    const {user} = props;
    return (
        <View>
            <Text>Username: {user.username}</Text>
            <Text>Name: {user.name}</Text>
            <Text>Email: {user.email}</Text>
            <Text>Phone: {user.phone}</Text>
            <Text>Website: {user.website}</Text>
            <ExpandablePanel header="Address details">
                <AddressDetails address={user.address}/>
            </ExpandablePanel>
        </View>
    );
};

export default UserDetails;
