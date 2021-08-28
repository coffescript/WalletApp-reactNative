import typeToReducer from 'type-to-reducer';
import { 
    LOGIN, 
    REGISTER, 
    LOGIN_GOOGLE_ASYNC, 
    LOGIN_FACEBOOK_ASYNC, 
    RESET_REGISTER,
    RECOVERY_PASSWORD 
} from '../actions/auth/types';

const initialState = {
    login: {
        isFetching: false,
        loginError: false,
        loginSuccess: false,
    },
    loginFacebook: {
        isFetching: false,
        loginFacebookError: false,
        loginFacebookSuccess: false,
    },
    loginGoogle: {
        isFetching: false,
        loginGoogleError: false,
        loginGoogleSuccess: false,
    },
    register: {
        isFetching: false,
        registerError: false,
        registerSuccess: false,
    },
    recoveryPassword: {
        isFetching: false,
        recoveryError: false,
        recoverySuccess: false,  
    }
}

export const authReducer = typeToReducer({
    [LOGIN]: {
        PENDING: () => ({
            ...initialState,
            login: {
                isFetching: true,
                loginError: false,
                loginSuccess: false,
            }
        }),
        ERROR: () => ({
            ...initialState,
            login: {
                isFetching: false,
                loginError: true,
                loginSuccess: false,
            }
        }),
        SUCCESS: () => ({
            ...initialState,
            login: {
                isFetching: false,
                loginError: false,
                loginSuccess: true,
            }
        }),
    },
    [LOGIN_FACEBOOK_ASYNC]: {
        PENDING: () => ({
            ...initialState,
            loginFacebook: {
                isFetching: true,
                loginFacebookError: false,
                loginFacebookSuccess: false,
            }
        }),
        ERROR: () => ({
            ...initialState,
            loginFacebook: {
                isFetching: false,
                loginFacebookError: true,
                loginFacebookSuccess: false,
            }
        }),
        SUCCESS: () => ({
            ...initialState,
            loginFacebook: {
                isFetching: false,
                loginFacebookError: false,
                loginFacebookSuccess: true,
            }
        }),
    },
    [LOGIN_FACEBOOK_ASYNC]: {
        PENDING: () => ({
            ...initialState,
            loginFacebook: {
                isFetching: true,
                loginFacebookError: false,
                loginFacebookSuccess: false,
            }
        }),
        ERROR: () => ({
            ...initialState,
            loginFacebook: {
                isFetching: false,
                loginFacebookError: true,
                loginFacebookSuccess: false,
            }
        }),
        SUCCESS: () => ({
            ...initialState,
            loginFacebook: {
                isFetching: false,
                loginFacebookError: false,
                loginFacebookSuccess: true,
            }
        }),
    },
    [LOGIN_GOOGLE_ASYNC]: {
        PENDING: () => ({
            ...initialState,
            loginGoogle: {
                isFetching: true,
                loginGoogleError: false,
                loginGoogleSuccess: false,
            }
        }),
        ERROR: () => ({
            ...initialState,
            loginGoogle: {
                isFetching: false,
                loginGoogleError: true,
                loginGoogleSuccess: false,
            }
        }),
        SUCCESS: () => ({
            ...initialState,
            loginGoogle: {
                isFetching: false,
                loginGoogleError: false,
                loginGoogleSuccess: true,
            }
        }),
    },
    [REGISTER]: {
        PENDING: () => ({
            ...initialState,
            register: {
                isFetching: true,
                registerError: false,
                registerSuccess: false,
            }
        }),
        ERROR: () => ({
            ...initialState,
            register: {
                isFetching: false,
                registerError: true,
                registerSuccess: false,
            }
        }),
        SUCCESS: () => ({
            ...initialState,
            register: {
                isFetching: false,
                registerError: false,
                registerSuccess: true,
            }
        }),
    },
    [RECOVERY_PASSWORD]: {
        PENDING: () => ({
            ...initialState,
            recoveryPassword: {
                isFetching: true,
                recoveryError: false,
                recoverySuccess: false,
            }
        }),
        ERROR: () => ({
            ...initialState,
            recoveryPassword: {
                isFetching: false,
                recoveryError: true,
                recoverySuccess: false,
            }
        }),
        SUCCESS: () => ({
            ...initialState,
            recoveryPassword: {
                isFetching: false,
                recoveryError: false,
                recoverySuccess: true,
            }
        }),
    },
    [RESET_REGISTER]: () => ({
        ...initialState,
        register: {
            isFetching: false,
            registerError: false,
            registerSuccess: false,
        }
    })
}, initialState)

export default authReducer