import {createUserDataService, UserDataService} from './userData/userDataService';

export interface ServiceMap {
    userDataService: UserDataService
}

export const createServiceMap = () => {
    return {
        userDataService: createUserDataService()
    }
};
