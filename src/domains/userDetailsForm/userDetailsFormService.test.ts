import {SubmissionError} from 'redux-form';

import {UserDetailsFormData} from 'src/domains/types';
import {runEmptyValidation} from './userDetailsFormService';

describe('runEmptyValidation', () => {

    let formData: UserDetailsFormData;
    beforeEach(() => {
        formData = {
            id: 0,
            name: 'name',
            username: 'username',
            email: 'email',
            phone: 'phone',
            website: 'website'
        };
    });

    it('does not throw an error for properly filled form data', () => {
        expect(() => runEmptyValidation(formData)).not.toThrow();
    });

    it('throws an error when a field is empty', () => {
        const data = {...formData, name: ''};
        expect(() => runEmptyValidation(data)).toThrow(SubmissionError);
    });
});