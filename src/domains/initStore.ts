import {AnyAction, applyMiddleware, createStore, Store} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from 'src/domains/rootReducer';
import {createServiceMap} from 'src/domains/services';
import {AppState} from 'src/domains/types';

const initStore = (): Store<AppState> => {
    const serviceMap = createServiceMap();

    const thunkMiddleware = thunk.withExtraArgument(serviceMap);
    const middlewares = [
        thunkMiddleware
    ];
    const enhancer = applyMiddleware(...middlewares);

    return createStore<AppState, AnyAction, {}, {}>(rootReducer, enhancer);
};

export default initStore;