import {takeLatest, put, select, take} from 'redux-saga/effects';

//takeLatest takes the latest action function. It cancels if there is any previously running action fired
//takeEvery first completes the previously fired action function first, then takes the latest one
//'put' goes to the reducer, to dispatch new action. It fires new action function

function* increaseCounter() {
    const mail = yield select((state) => state.userReducer.email)
    const data = yield take('INCREASE_COUNTER')
   yield put({type:'INCREASE_MY_COUNTER', payload:1})
   console.log('data---', data);
   debugger
}
function* decreaseCounter() {
    yield put({type: 'DECREASE_MY_COUNTER', payload: 1})
}


export function* watchIncreaseCounter() {
    yield takeLatest('INCREASE_COUNTER',increaseCounter)  //args- type,function to be called
}

export function* watchDecreaseCounter(){
    yield takeLatest('DECREASE_COUNTER',decreaseCounter)
}