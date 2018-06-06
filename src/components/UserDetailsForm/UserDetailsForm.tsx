import i18n from 'i18n-js';
import * as React from 'react';
import {Button, View} from 'react-native';
import {reduxForm, ConfigProps, Field, InjectedFormProps, FormSubmitHandler, SubmitHandler} from 'redux-form';

import {UserDetailsFormData} from '../../domains/types';
import FormTextInput from '../FormTextInput/FormTextInput';

export interface FormProps {
    handleSubmit: SubmitHandler<UserDetailsFormData, Props>;
    onSubmit: FormSubmitHandler<UserDetailsFormData>,
}

export const Form: React.SFC<FormProps> = (props) => {
    const {handleSubmit, onSubmit} = props;
    return (
        <View>
            <Field label={i18n.t('name')} name="name" component={FormTextInput}/>
            <Field label={i18n.t('username')} name="username" component={FormTextInput}/>
            <Field label={i18n.t('email')} name="email" component={FormTextInput}/>
            <Field label={i18n.t('phone')} name="phone" component={FormTextInput}/>
            <Field label={i18n.t('website')} name="website" component={FormTextInput}/>
            <Button title={i18n.t('submit')}
                    onPress={handleSubmit(onSubmit)}
                    testID="user-details-form-submit-button"
            />
        </View>
    );
};

interface Props {
    onSubmit: FormSubmitHandler<UserDetailsFormData>,
}

const UserDetailsForm: React.SFC<Props & InjectedFormProps<UserDetailsFormData, Props>> = (props) => {
    const {handleSubmit, onSubmit} = props;
    return <Form handleSubmit={handleSubmit} onSubmit={onSubmit}/>;
};

const formConfig: ConfigProps<UserDetailsFormData, Props> = {
    form: 'userDetailsForm',
};

export default reduxForm<UserDetailsFormData, Props>(formConfig)(UserDetailsForm);
