import {ThunkAction} from 'redux-thunk';
import {ServiceMap} from 'src/domains/services';
import {NavigationAction, NavigationParams} from "react-navigation";

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

export interface NavigateOptions {
    routeName: string;
    params?: NavigationParams;
    action?: NavigationAction;
    key?: string;
}

export interface HasGetParam<P> {
    getParam: <T extends keyof P>(param: T, fallback?: P[T]) => P[T];
}
