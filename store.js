import {createStore, applyMiddleware} from 'redux';
import reducers from './src/reducers';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './src/sagas';



const sagaMiddleware = createSagaMiddleware();
const middlewares= [thunk,sagaMiddleware];

const store=createStore(reducers,{},applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);

//applyMiddleware(thunk)  //only thunk

export default store;
