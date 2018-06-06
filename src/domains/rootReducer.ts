import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';

import {AppState} from './types';
import userDataReducer from './userData/userDataReducer';

const rootReducer = combineReducers<AppState>({
    userDataState: userDataReducer,
    form: formReducer
});

export default rootReducer;