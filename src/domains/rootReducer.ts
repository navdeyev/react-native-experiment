import {combineReducers} from 'redux';

import {AppState} from 'src/domains/types';
import userDataReducer from 'src/domains/userData/userDataReducer';

const rootReducer = combineReducers<AppState>({
    userDataState: userDataReducer
});

export default rootReducer;