import * as React from 'react';
import {Provider} from 'react-redux';

import initStore from 'src/domains/initStore';
import Navigator from 'src/screens/Navigator';

const store = initStore();

export default class App extends React.Component<{}> {
    render() {
        return (
            <Provider store={store}>
                <Navigator />
            </Provider>
        );
    }
}
