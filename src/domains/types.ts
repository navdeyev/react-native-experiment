import {ThunkAction} from 'redux-thunk';
import {NavigationAction, NavigationParams} from 'react-navigation';

import {ServiceMap} from 'src/domains/services';
import {FormStateMap} from "redux-form/lib/reducer";

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

export type UserDetailsFormData = {
    [index:string]: any;
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
}

export interface User extends UserDetailsFormData {
    address: Address;
    company: Company;
}

export interface UserDataState {
    userData: Array<User>
}

export interface AppState {
    userDataState: UserDataState,
    //There seems to be a conflict in Reducer typing between redux and redux-form
    // It could be, that redux-form is a little behind
    form: FormStateMap | any
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

export interface HasNavigate {
    navigate: (options: NavigateOptions) => boolean
}