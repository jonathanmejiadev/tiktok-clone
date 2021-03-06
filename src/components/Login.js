import React from 'react'
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { logIn } from '../store/user';
import UserFormLayout from './UserFormLayout';
import AppInput from './AppInput';
import { AppButton } from '../theme';

const Login = () => {
    let dispatch = useDispatch();
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        dispatch(
            logIn(
                { credentials: data }
            )
        )
    };

    return (
        <UserFormLayout>
            <form onSubmit={handleSubmit(onSubmit)}>
                <AppInput type="email" label="Email" register={{ ...register('email') }} />
                <AppInput type="password" label="Password" register={{ ...register('password') }} />
                <AppButton type="submit" small>Log In</AppButton>
            </form>
        </UserFormLayout>
    )
}

export default Login;
