import {AnyAction, combineReducers} from 'redux';

import {User} from '../types';
import {UserDataActions} from './userDataActions';

export const userData = (state: Array<User> = [], action: AnyAction) => {
    switch (action.type) {
        case UserDataActions.SUCCESS: {
            return action.payload;
        }

        case UserDataActions.ERROR: {
            return [];
        }

        default: {
            return state;
        }
    }
};

export default combineReducers({
    userData
});
