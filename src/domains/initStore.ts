import {AnyAction, applyMiddleware, createStore, Store} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

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
    const composedEnhancer = composeWithDevTools(enhancer);

    return createStore<AppState, AnyAction, {}, {}>(rootReducer, composedEnhancer);
};

export default initStore;