import i18n from 'i18n-js';
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
            <Text>{`${i18n.t('username')}: ${user.username}`}</Text>
            <Text>{`${i18n.t('name')}: ${user.name}`}</Text>
            <Text>{`${i18n.t('email')}: ${user.email}`}</Text>
            <Text>{`${i18n.t('phone')}: ${user.phone}`}</Text>
            <Text>{`${i18n.t('website')}: ${user.website}`}</Text>
            <ExpandablePanel header={i18n.t('addressDetails')}>
                <AddressDetails address={user.address}/>
            </ExpandablePanel>
        </View>
    );
};

export default UserDetails;
