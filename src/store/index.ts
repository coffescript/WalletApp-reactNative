import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducers";
import rootSagas from "./rootSagas";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
let middlewares = [sagaMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSagas);

export default store;