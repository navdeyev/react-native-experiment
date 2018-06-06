import i18n from 'i18n-js';
import {isEmpty} from 'ramda';
import {FormErrors, SubmissionError} from 'redux-form';
import {UserDetailsFormData} from '../types';

export const runEmptyValidation = (formValues: UserDetailsFormData) => {
    const isFieldEmpty = (key: string) => isEmpty(formValues[key]);
    const emptyFields = Object.keys(formValues).filter(isFieldEmpty);

    if (!isEmpty(emptyFields)) {
        const errors: FormErrors<UserDetailsFormData> = {};
        emptyFields.forEach((key) => {
            errors[key] = i18n.t('mandatoryError');
        });
        throw new SubmissionError(errors);
    }
};

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const validate = (promise: Promise<any>) => (formValues: UserDetailsFormData) => {
    return promise.then(() => {
        runEmptyValidation(formValues);
    });
};

export default validate(sleep(1000));