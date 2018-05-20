import {ThunkAction} from 'redux-thunk';
import {ServiceMap} from 'src/domains/services';

export interface Geo {
    lat: string;
    lng: string;
}

export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}

export interface UserDataState {
    userData: Array<User>
}

export interface AppState {
    userDataState: UserDataState
}

export type AppThunkAction<R> = ThunkAction<R, AppState, ServiceMap>