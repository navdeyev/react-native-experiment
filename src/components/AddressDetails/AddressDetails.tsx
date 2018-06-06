import * as React from 'react';
import {Text, View} from 'react-native';

import {Address} from '../../domains/types';

interface Props {
    address: Address
}

const AddressDetails: React.SFC<Props> = props => {
    const {address} = props;
    return (
        <View>
            <Text>{address.street}</Text>
            <Text>{address.suite}</Text>
            <Text>{address.city}</Text>
            <Text>{address.zipcode}</Text>
        </View>
    );
};

export default AddressDetails;