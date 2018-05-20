import * as React from 'react';
import {Provider} from 'react-redux';

import initStore from 'src/domains/initStore';
import UserListContainer from 'src/components/UserList/UserListContainer';

const store = initStore();

export default class App extends React.Component<{}> {
    render() {
        return (
            <Provider store={store}>
                <UserListContainer />
            </Provider>
        );
    }
}
