import {userData} from './userDataReducer';
import {UserDataActions} from './userDataActions';
import {User} from '../types';

describe('userData', () => {

    it('has default state', () => {
        expect(userData(undefined, {type: 'some-action'})).toEqual([]);
    });

    it('returns payload on UserDataActions.SUCCESS', () => {
        const payload: Array<User> = [];
        expect(userData(undefined, {type: UserDataActions.SUCCESS, payload})).toEqual(payload);
    });

    it('resets the state on error', () => {
        const user = {} as User;
        const initialState = [user];
        expect(userData(initialState, {type: UserDataActions.ERROR, payload: 'some-error'})).toEqual([]);
    });

    it('does not update state on any other action', () => {
        const user = {} as User;
        const initialState = [user];
        expect(userData(initialState, {type: 'some-action', payload: 'some-payload'})).toEqual(initialState);
    });

});