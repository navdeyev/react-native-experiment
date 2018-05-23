import {StackNavigator} from 'react-navigation';

import UserDetailsScreen from './UserDetailsScreen';
import UserListScreen from './UserListScreen';

const Navigator = StackNavigator({
    UserList: {screen: UserListScreen},
    UserDetails: {screen: UserDetailsScreen}
});

export default Navigator;