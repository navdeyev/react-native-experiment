import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';

import {AppState} from 'src/domains/types';
import userDataReducer from 'src/domains/userData/userDataReducer';

const rootReducer = combineReducers<AppState>({
    userDataState: userDataReducer,
    form: formReducer
});

export default rootReducer;