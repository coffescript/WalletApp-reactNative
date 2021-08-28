import { createAction } from 'redux-actions';
import {
    LOGIN_ASYNC,
    LOGIN_GOOGLE_ASYNC,
    LOGIN_FACEBOOK,
    LOGIN_FACEBOOK_ASYNC,
    REGISTER_ASYNC,
    RESET_REGISTER,
    RECOVERY_PASSWORD_ASYNC
} from './types'

export const loginPending = createAction(LOGIN_ASYNC.PENDING);
export const loginError = createAction(LOGIN_ASYNC.ERROR)
export const loginSuccess = createAction(LOGIN_ASYNC.SUCCESS);

export const loginFacebookPending = createAction(LOGIN_FACEBOOK_ASYNC.PENDING);
export const loginFacebookError = createAction(LOGIN_FACEBOOK_ASYNC.ERROR)
export const loginFacebookSuccess = createAction(LOGIN_FACEBOOK_ASYNC.SUCCESS);

export const loginGooglePending = createAction(LOGIN_GOOGLE_ASYNC.PENDING);
export const loginGoogleError = createAction(LOGIN_GOOGLE_ASYNC.ERROR)
export const loginGoogleSuccess = createAction(LOGIN_GOOGLE_ASYNC.SUCCESS);

export const registerPending = createAction(REGISTER_ASYNC.PENDING);
export const registerError = createAction(REGISTER_ASYNC.ERROR)
export const registerSuccess = createAction(REGISTER_ASYNC.SUCCESS);

export const recoveryPasswordPending = createAction(RECOVERY_PASSWORD_ASYNC.PENDING)
export const recoveryPasswordError = createAction(RECOVERY_PASSWORD_ASYNC.ERROR)
export const recoveryPasswordSuccess = createAction(RECOVERY_PASSWORD_ASYNC.SUCCESS)

export const resetRegister = createAction(RESET_REGISTER)