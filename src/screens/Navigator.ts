import {NavigationRouteConfigMap, StackNavigator, StackNavigatorConfig} from 'react-navigation';

import UserDetailsScreen from './UserDetailsScreen';
import UserListScreen from './UserListScreen';

const routeConfig: NavigationRouteConfigMap = {
    UserList: {screen: UserListScreen},
    UserDetails: {screen: UserDetailsScreen}
};

const stackConfig: StackNavigatorConfig = {
    initialRouteName: 'UserList',
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#000',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'normal',
        },
    }
};

const Navigator = StackNavigator(routeConfig, stackConfig);
export default Navigator;