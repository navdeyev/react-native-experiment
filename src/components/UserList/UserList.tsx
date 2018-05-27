import * as React from 'react';
import styled from 'styled-components';
import {FlatList, ListRenderItemInfo, Text, TouchableHighlight, View} from 'react-native';

import {User} from 'src/domains/types';

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

export const StyledTouchableHighlight = styled(TouchableHighlight)`
  padding: 5px 10px;
  border-radius: 4px;
  background-color: #ddd;
  border: 2px solid #666;
`;

export const renderItem = (onSelectUser: (user: User) => void, dataLength: number) =>
    (info: ListRenderItemInfo<User>) => {
        const user = info.item;
        const pressHandler = () => onSelectUser(user);
        const text = `${ user.username } <${ user.name }>`;
        return (
            <StyledRow lastChild={info.index === dataLength - 1}>
                <StyledText testID={`user-row-text-${info.index}`}>{text}</StyledText>
                <StyledTouchableHighlight onPress={pressHandler}>
                    <Text>Details</Text>
                </StyledTouchableHighlight>
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