import {Dispatch} from 'react-redux';
import {ServiceMap} from 'src/domains/services';
import {AppState, AppThunkAction} from 'src/domains/types';

export enum UserDataActions {
    LOAD = 'LOAD',
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR'
}

export const loadUserList = (): AppThunkAction<Promise<any>> =>
    (dispatch: Dispatch<AppState>, getState: () => AppState, serviceMap: ServiceMap) => {
        dispatch({type: UserDataActions.LOAD});

        return serviceMap.userDataService.fetchUsers()
            .then(json => {
                dispatch({type: UserDataActions.SUCCESS, payload: json})
            })
            .catch(error => {
                dispatch({type: UserDataActions.ERROR, payload: error})
            });
    };
