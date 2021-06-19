import {all,fork} from 'redux-saga/effects';
import {watchDecreaseCounter, watchIncreaseCounter} from './homeSagas';

export function* rootSaga() {
    yield all([  //run parallely
        fork(watchIncreaseCounter),
        fork(watchDecreaseCounter)
    ])
}

//'fork' is used for perform non-blocking task