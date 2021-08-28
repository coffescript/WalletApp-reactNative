import { createAsyncTypes } from '@src/utils/createTypes';

export const LOGIN = 'LOGIN';
export const LOGIN_ASYNC = createAsyncTypes('LOGIN');

export const LOGIN_GOOGLE = 'LOGIN_GOOGLE';
export const LOGIN_GOOGLE_ASYNC = createAsyncTypes('LOGIN_GOOGLE');

export const LOGIN_FACEBOOK = 'LOGIN_FACEBOOK';
export const LOGIN_FACEBOOK_ASYNC = createAsyncTypes('LOGIN_FACEBOOK');

export const REGISTER = 'REGISTER';
export const REGISTER_ASYNC = createAsyncTypes('REGISTER');
export const RESET_REGISTER = 'RESET_REGISTER'

export const RECOVERY_PASSWORD = 'RECOVERY_PASSWORD'
export const RECOVERY_PASSWORD_ASYNC = createAsyncTypes('RECOVERY_PASSWORD')