import i18n from 'i18n-js';
import * as React from 'react';
import styled from 'styled-components';
import {Button, FlatList, ListRenderItemInfo, Text, View} from 'react-native';

import {User} from '../../domains/types';

interface RowProps {
    lastChild: boolean
}

export const StyledRow = styled(View)`
  padding: 8px;
  display: flex;
  border-radius: 4px;
  flex-direction: row;
  border: 2px solid #333;
  margin-bottom: ${(props: RowProps) => props.lastChild ? '0' : '8px'};
`;

const StyledText = styled(Text)`
  flex: 1;
  padding: 7px 8px 7px 0;
`;

export const renderItem = (onSelectUser: (user: User) => void, dataLength: number) =>
    (info: ListRenderItemInfo<User>) => {
        const user = info.item;
        const pressHandler = () => onSelectUser(user);
        const text = `${ user.username } <${ user.name }>`;
        return (
            <StyledRow lastChild={info.index === dataLength - 1}>
                <StyledText testID={`user-row-text-${info.index}`}>{text}</StyledText>
                <Button title={i18n.t('details')}
                        onPress={pressHandler}
                        testID={`view-details-button-${info.index}`}/>
            </StyledRow>
        );
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
            data={userData}
            renderItem={renderItem(onSelectUser, userData.length)}
            keyExtractor={keyExtractor}
        />
    );
};

export default UserList;