import {User} from 'src/domains/types';

export interface UserDataService {
    fetchUsers: () => Promise<Array<User>>
}

export const createUserDataService = (): UserDataService => {
    return {
        fetchUsers: () => {
            return fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
        }
    };
};