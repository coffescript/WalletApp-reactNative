/* eslint-disable no-unused-vars */
import Authentication from './Authentication';
import { connect } from 'react-redux';
import * as actions from "../../../store/actions/auth";

const mapStateToProps = (state: any) => {
    //const authReducerLogin = state.authReducer.login
    console.log('state', state);

    return {

    }
}

const mapDispatchToProps = (dispatch: any) => ({
    login: (values: any) => dispatch(actions.loginPending(values)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);
