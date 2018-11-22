import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
// import { routerMiddleware } from 'react-router-redux'
import rootReducer from '../reducers'
import rootSaga from '../sagas'


export default function configureStore(history, initialState) {
  const logger = createLogger(); //调试阶段使用,终端运行：react-native log-android可以查看,web控制台也可以查看
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(
        sagaMiddleware,logger
        //,
        // routerMiddleware(history)
      )
    )
  )
  sagaMiddleware.run(rootSaga)

  return store
}
