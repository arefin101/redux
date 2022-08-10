import {put, takeEvery, all, fork} from 'redux-saga/effects';


function* signedIn() {
    yield put({ type: "SIGNED_IN" });
}

export function* watchLogged(){
    yield takeEvery('SIGN_IN', signedIn);
}

function* loggedSaga() {
    yield all([
        fork(watchLogged)
        
    ]);
}


export default loggedSaga;