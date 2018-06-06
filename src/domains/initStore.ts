import {AnyAction, applyMiddleware, createStore, Store} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './rootReducer';
import {createServiceMap} from './services';
import {AppState} from './types';

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