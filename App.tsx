import * as React from 'react';
import {Provider} from 'react-redux';

import initStore from 'src/domains/initStore';
import {initLocale} from 'src/localization/setupInternationalization';
import Navigator from 'src/screens/Navigator';

const store = initStore();

interface Props {
}

interface State {
    initDone: boolean;
}

export default class App extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {initDone: false};
    }

    componentDidMount() {
        initLocale().then(() => {
            this.setState((prevState: State) => {
                return {initDone: !prevState.initDone};
            });
        });
    }

    render() {
        if (this.state.initDone) {
            return (
                <Provider store={store}>
                    <Navigator/>
                </Provider>
            );
        }
        return null;
    }
}
