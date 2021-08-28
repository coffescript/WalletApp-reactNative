import auth from '../../../api/auth';
import client from '../../../api/client';
import { call, put, takeLatest } from 'redux-saga/effects';
import { LOGIN_ASYNC } from '../../actions/auth/types';
import { loginSuccess, loginError } from '../../actions/auth'

type LoginProps = {
    email: string;
    password: string;
}

type LoginResponseProps = {
    expiresIn: number;
    accessToken: string;
    user: {
        id: number;
        uuid: string;
        firstName: string;
        lastName: string;
        phone: string;
        gender: string;
        email: string;
        profile_picture_url: string;
        borndate: string;
        ident: string;
        ip_address: string;
    }
}

function* login(payload: any): any {
    try {

        const { email, password } = payload.payload;
        console.log('in saga', email, password);
        const accessToken = yield call(auth.login, { email: email, password: password })

        console.log('accessToken', accessToken)

        yield call(client.storeToken, accessToken.data.accessToken);
        yield put(loginSuccess());

        // return accessToken;
    } catch (error) {
        console.error(error)
        yield put(loginError())
    }
}

export default function* watchLogin() {
    yield takeLatest(LOGIN_ASYNC.PENDING, login);
}