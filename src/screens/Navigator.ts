import {NavigationRouteConfigMap, StackNavigator, StackNavigatorConfig} from 'react-navigation';

import UserDetailsScreen from './UserDetailsScreen';
import UserListScreen from './UserListScreen';
import UserDetailsFormScreen from './UserDetailsFormScreen';

const routeConfig: NavigationRouteConfigMap = {
    UserList: {screen: UserListScreen},
    UserDetails: {screen: UserDetailsScreen},
    UserDetailsForm: { screen: UserDetailsFormScreen}
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