import React from 'react';
import { View, TextInput } from 'react-native';
import { Formik } from 'formik';

const initialValues = {
    email: '',
    password: '',
};

const LoginPage = () => (
    <Formik initialValues={initialValues} onSubmit={(values) => console.log(values)}>
        {({ handleChange, handleSubmit, values }) => (
            <View>
                <TextInput placeholder="E-Mail" value={values.email} onChangeText={handleChange('email')} />
            </View>
        )}
    </Formik>
);

export default LoginPage;
