import Mock = jest.Mock;
import {User} from 'src/domains/types';
import {loadUserList, UserDataActions} from 'src/domains/userData/userDataActions';

describe('loadUserList', () => {

    let dispatch: Mock;
    let getState: Mock;
    beforeEach(() => {
        dispatch = jest.fn();
        getState = jest.fn();
    });

    it('dispatches UserDataActions.LOAD action and UserDataActions.SUCCESS for positive scenario', async () => {
        const returnedUserList: Array<User> = [];
        const serviceMap = {
            userDataService: {
                fetchUsers: () => Promise.resolve(returnedUserList)
            }
        };
        await loadUserList()(dispatch, getState, serviceMap);
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toBeCalledWith({type: UserDataActions.LOAD});
        expect(dispatch).toBeCalledWith({type: UserDataActions.SUCCESS, payload: returnedUserList});
    });

    it('dispatches UserDataActions.LOAD action and UserDataActions.ERROR for negative scenario', async () => {
        const someError = {};
        const serviceMap = {
            userDataService: {
                fetchUsers: () => Promise.reject(someError)
            }
        };
        await loadUserList()(dispatch, getState, serviceMap);
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toBeCalledWith({type: UserDataActions.LOAD});
        expect(dispatch).toBeCalledWith({type: UserDataActions.ERROR, payload: someError});
    });

});