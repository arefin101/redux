import {all, fork} from 'redux-saga/effects';

import counterSaga from './counterSaga';
import isLogged from './isLoggedSaga';


export default function* allSaga() {
    yield all ([
        fork(counterSaga),
        fork(isLogged),
    ])
}