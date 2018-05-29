import *as React from 'react';
import {Text, TextInput, View} from 'react-native';
import {EventOrValueHandler} from 'redux-form';
import styled from 'styled-components';

const Wrapper = styled(View)`margin: 0 0 6px 0;`;
const InputLabel = styled(Text)`font-weight: bold;`;
const StyledTextInput = styled(TextInput)`padding: 0 0 2px 0;`;
const InputError = styled(Text)`color: #ff0000`;

interface WrappedInput {
    value: any;
    onChange: EventOrValueHandler<React.ChangeEvent<any>>
}

interface WrappedInputMeta {
    error?: any;
}

export interface WrappedInputField {
    label?: string;
    input: WrappedInput;
    meta: WrappedInputMeta
}

const FormTextInput = (props: WrappedInputField) => {
    const label = props.label;
    const {onChange, value} = props.input;
    const {error} = props.meta;
    return (
        <Wrapper>
            {label ? <InputLabel testID="form-text-input-label">{label}</InputLabel> : null}
            <StyledTextInput onChangeText={onChange} value={value}/>
            {error ? <InputError testID="form-text-input-error">{error}</InputError> : null}
        </Wrapper>
    );
};

export default FormTextInput;