import i18n from 'i18n-js';
import * as React from 'react';
import {ConfigProps, Field, InjectedFormProps, reduxForm, WrappedFieldProps} from 'redux-form';
import {Button, Text, TextInput, View} from 'react-native';

interface Props extends InjectedFormProps {
}

const renderInput = (wrappedProps: WrappedFieldProps) => {
    const {onChange, value} = wrappedProps.input;
    return <TextInput onChangeText={onChange} value={value}/>;
};

const submit = (values: any) => {
    console.log('submit', values);
};

export const UserDetailsForm: React.SFC<Props> = (props) => {
    const {handleSubmit} = props;

    return (
        <View>
            <Text>{i18n.t('name')}</Text>
            <Field name="name" component={renderInput}/>
            <Field name="username" component={renderInput}/>
            <Field name="email" component={renderInput}/>
            <Field name="phone" component={renderInput}/>
            <Field name="website" component={renderInput}/>
            <Button title={i18n.t('submit')}
                    onPress={handleSubmit(submit)}
                    testID="user-details-form-submit-button"
            />
        </View>
    );
};

const formConfig: ConfigProps = {
    form: 'userDetailsForm'
};

export default reduxForm(formConfig)(UserDetailsForm);