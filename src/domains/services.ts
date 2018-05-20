import {createUserDataService, UserDataService} from 'src/domains/userData/userDataService';

export interface ServiceMap {
    userDataService: UserDataService
}

export const createServiceMap = () => {
    return {
        userDataService: createUserDataService()
    }
};
