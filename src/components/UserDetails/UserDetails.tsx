import i18n from 'i18n-js';
import * as React from 'react';
import {Button, Text, View} from 'react-native';

import {User} from 'src/domains/types';
import AddressDetails from 'src/components/AddressDetails/AddressDetails';
import ExpandablePanel from 'src/components/ExpandablePanel/ExpandablePanel';

export interface Props {
    user: User;
    onEditUser: (user: User) => void;
}

const UserDetails: React.SFC<Props> = props => {
    const {user, onEditUser} = props;

    const onPressHandler = () => {
        onEditUser(user);
    };

    return (
        <View>
            <Text>{`${i18n.t('username')}: ${user.username}`}</Text>
            <Text>{`${i18n.t('name')}: ${user.name}`}</Text>
            <Text>{`${i18n.t('email')}: ${user.email}`}</Text>
            <Text>{`${i18n.t('phone')}: ${user.phone}`}</Text>
            <Text>{`${i18n.t('website')}: ${user.website}`}</Text>
            <ExpandablePanel header={i18n.t('addressDetails')}>
                <AddressDetails address={user.address}/>
            </ExpandablePanel>
            <Button title={i18n.t('edit')}
                    onPress={onPressHandler}
                    testID="edit-user-details-button"/>
        </View>
    );
};

export default UserDetails;
