import {put, takeEvery, all, fork} from 'redux-saga/effects';


function* increaseUp() {
    yield put({ type: "INCREASE", value: 2 });
}


function* decreaseDown() {
    yield put({ type: "DECREASE", value: 2 });
}


export function* watchIncreament() {
    yield takeEvery('INCREAMENT', increaseUp);
}


export function* watchDecreament() {
    yield takeEvery('DECREAMENT', decreaseDown);
}


function* counterSaga() {
    yield all([
        fork(watchIncreament),
        fork(watchDecreament)
    ]);
}


export default counterSaga;