import {takeLatest, put, select, take, call, delay, takeEvery} from 'redux-saga/effects';
import {getHomeAPIdata} from '../api';

//takeLatest takes the latest action function. It cancels if there is any previously running action fired
//takeEvery first completes the previously fired action function first, then takes the latest one
//'put' goes to the reducer, to dispatch new action. It fires new action function

function* increaseCounter(action) {
    const mail = yield select((state) => state.userReducer.email)  //like 'useSelector'(hook),'mapStateToProps'(function)
    yield delay(500);
   // const data = yield take('INCREASE_COUNTER')
    yield put({type:'INCREASE_MY_COUNTER', payload:1})  //like 'dispatch' fires action function
    console.log('acttiioonn---', action);
    const resp = yield call(getHomeAPIdata,{mail,nm:'shreya'})
    //debugger
}
function* decreaseCounter() {
    yield put({type: 'DECREASE_MY_COUNTER', payload: 1})
}


export function* watchIncreaseCounter() {
    yield takeLatest('INCREASE_COUNTER',increaseCounter)  //args- type,function to be called
    // const {a1}= yield take('INCREASE_COUNTER')
    // console.log('a1111--',a1)
    // yield call(increaseCounter,a1)
}

export function* watchDecreaseCounter(){
    yield takeLatest('DECREASE_COUNTER',decreaseCounter)
}